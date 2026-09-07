import { Link } from "@tanstack/react-router";
import { Check, ImagePlus, Loader2, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveEstimate } from "@/lib/estimate-session";
import {
  BASE_AREA_CM2,
  BASE_PRICE_NZD,
  buildEstimate,
  formatNzd,
  PAINT_SYSTEMS,
  PANELS,
  type PaintSystemId,
  type PanelId,
} from "@/lib/paint";
import {
  isPlausibleNzPlate,
  lookupVehicle,
  SAMPLE_PLATES,
  type VehicleRecord,
} from "@/lib/vehicles";

export function EstimateTool() {
  const [plate, setPlate] = useState("");
  const [looking, setLooking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<VehicleRecord | null>(null);
  const [area, setArea] = useState(632);
  const [panelId, setPanelId] = useState<PanelId>("bumper");
  const [systemOverride, setSystemOverride] = useState<PaintSystemId | "">("");
  const [pickup, setPickup] = useState(false);
  const [photoName, setPhotoName] = useState<string | undefined>();
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);

  const systemId: PaintSystemId = systemOverride || vehicle?.paintSystem || "solid";

  const result = useMemo(() => {
    if (!vehicle) return null;
    return buildEstimate({
      areaCm2: area,
      systemId,
      panelId,
      pickup,
      vehicleTier: vehicle.vehicleTier,
    });
  }, [vehicle, area, systemId, panelId, pickup]);

  async function onLookup(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setGenerated(false);
    const p = plate.trim();
    const cleaned = p.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if (!isPlausibleNzPlate(cleaned)) {
      setError("Enter a valid New Zealand plate (3–8 letters or numbers).");
      setVehicle(null);
      return;
    }
    setLooking(true);
    // Brief delay for a natural lookup feel; vehicle data is resolved on-site
    // (local NZ-style catalogue; swap for CarJam API when a key is available — see vehicles.ts)
    await new Promise((r) => setTimeout(r, 480));
    const found = lookupVehicle(p);
    setLooking(false);
    if (!found) {
      setError("Could not match that plate. Check the letters and try again.");
      setVehicle(null);
      return;
    }
    setVehicle(found);
    setSystemOverride("");
  }

  function onPhoto(file: File | undefined) {
    if (!file) {
      setPhotoName(undefined);
      setPhotoUrl(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Please upload a photo (JPG or PNG).");
      return;
    }
    setError(null);
    setPhotoName(file.name);
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  }

  function onGenerate() {
    if (!vehicle || !result) return;
    saveEstimate({
      vehicle,
      areaCm2: area,
      panelId,
      systemId,
      pickup,
      result,
      photoName,
      createdAt: new Date().toISOString(),
    });
    setGenerated(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5 rounded-xl border border-border bg-surface p-5 md:p-7">
        <form onSubmit={onLookup} className="space-y-3">
          <Label htmlFor="plate">Vehicle registration</Label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              id="plate"
              value={plate}
              onChange={(e) => setPlate(e.target.value.toUpperCase())}
              placeholder="e.g. APL1 or HILUX"
              autoComplete="off"
              className="font-display text-lg tracking-[0.18em]"
            />
            <Button type="submit" disabled={looking} className="sm:w-40">
              {looking ? <Loader2 className="animate-spin" /> : <Search />}
              Look up
            </Button>
          </div>
          <p className="text-xs text-subtle">
            Try {SAMPLE_PLATES.join(", ")} or any NZ plate. Vehicle details are matched for
            paint-system pricing. Final colour is confirmed on inspection.
          </p>
        </form>

        {error ? <p className="text-sm text-accent">{error}</p> : null}

        {vehicle ? (
          <div className="rounded-lg border border-border bg-elevated p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-xs tracking-[0.16em] text-silver">
                  {vehicle.plate}
                </p>
                <h3 className="font-display text-2xl font-semibold">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-sm text-muted">
                  {vehicle.body} · {vehicle.fuel}
                  {vehicle.cc ? ` · ${vehicle.cc} cc` : ""}
                </p>
              </div>
              <div className="text-right">
                <div
                  className="ml-auto size-10 rounded-md border border-border"
                  style={{ background: vehicle.colourHex }}
                  aria-hidden
                />
                <p className="mt-1 text-xs text-muted">{vehicle.colour}</p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <div className="flex items-end justify-between">
              <Label htmlFor="area">Repair area (cm²)</Label>
              <span className="font-display text-lg tabular-nums">{area} cm²</span>
            </div>
            <input
              id="area"
              type="range"
              min={80}
              max={8000}
              step={4}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-accent"
              suppressHydrationWarning
            />
            <p className="text-xs text-subtle">
              Rate: {BASE_AREA_CM2} cm² = {formatNzd(BASE_PRICE_NZD)} base solid paint. Enter the
              damaged area, not the whole panel.
            </p>
            <Input
              type="number"
              min={40}
              max={20000}
              value={area}
              onChange={(e) => setArea(Number(e.target.value) || 0)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="panel">Panel</Label>
            <select
              id="panel"
              className="flex h-11 w-full border border-border bg-surface px-3 text-sm"
              value={panelId}
              onChange={(e) => setPanelId(e.target.value as PanelId)}
              suppressHydrationWarning
            >
              {PANELS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="system">Paint system</Label>
            <select
              id="system"
              className="flex h-11 w-full border border-border bg-surface px-3 text-sm"
              value={systemId}
              onChange={(e) => setSystemOverride(e.target.value as PaintSystemId)}
              suppressHydrationWarning
            >
              {PAINT_SYSTEMS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                  {vehicle?.paintSystem === s.id ? " — vehicle colour" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="photo">Photo of damage (optional)</Label>
          <label
            htmlFor="photo"
            className="flex min-h-24 cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border bg-elevated px-4 py-3"
          >
            <ImagePlus className="size-5 text-accent" />
            <span className="text-sm text-muted">
              {photoName ? photoName : "Upload a photo — not required to generate an estimate"}
            </span>
          </label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => onPhoto(e.target.files?.[0])}
            suppressHydrationWarning
          />
          {photoUrl ? (
            <img src={photoUrl} alt="Damage preview" className="h-28 w-28 rounded-md object-cover" />
          ) : null}
        </div>

        <label className="flex min-h-11 items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={pickup}
            onChange={(e) => setPickup(e.target.checked)}
            className="size-4 accent-accent"
            suppressHydrationWarning
          />
          Vehicle pickup across Auckland
          <span className="text-accent">+$80</span>
        </label>

        <Button type="button" size="lg" className="w-full" disabled={!vehicle} onClick={onGenerate}>
          Generate estimate
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-elevated p-5 md:p-7">
        <p className="font-display text-xs tracking-[0.18em] text-accent">Colour paint comparison</p>
        <h3 className="mt-1 font-display text-3xl font-semibold">Your estimate</h3>
        {!vehicle || !result ? (
          <p className="mt-4 text-sm text-muted">
            Look up a plate to compare solid, metallic, pearl and 3-stage pricing for this repair
            size.
          </p>
        ) : (
          <>
            <p className="mt-2 font-display text-5xl font-bold tabular-nums tracking-tight">
              {formatNzd(result.low)} – {formatNzd(result.high)}
            </p>
            <p className="mt-2 text-sm text-muted">
              Recommended for {vehicle.colour} ({PAINT_SYSTEMS.find((s) => s.id === systemId)?.name}
              ): {formatNzd(result.recommended)}
              {pickup ? " including pickup." : "."}
            </p>
            <div className="mt-5 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-3 py-2 font-medium">System</th>
                    <th className="px-3 py-2 font-medium">This area</th>
                  </tr>
                </thead>
                <tbody>
                  {result.quotes.map((q) => (
                    <tr
                      key={q.system.id}
                      className={q.isVehicleSystem ? "bg-accent/10" : "border-t border-border"}
                    >
                      <td className="px-3 py-2">
                        {q.system.name}
                        {q.isVehicleSystem ? (
                          <span className="ml-2 text-xs text-accent">matched</span>
                        ) : null}
                      </td>
                      <td className="px-3 py-2 tabular-nums">{formatNzd(q.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-subtle">
              Based on {result.areaCm2} cm² at {formatNzd(BASE_PRICE_NZD)} per {BASE_AREA_CM2} cm²
              for solid paint, then system, panel and vehicle-tier factors. Preliminary only — not a
              fixed quote. Confirmed after physical inspection.
            </p>
            {generated ? (
              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-2 text-sm text-fg">
                  <Check className="size-4 text-accent" /> Estimate saved. Continue to booking.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link to="/booking">Continue to booking</Link>
                </Button>
              </div>
            ) : (
              <p className="mt-6 text-sm text-muted">
                Generate the estimate to unlock the booking form with these details filled in.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
