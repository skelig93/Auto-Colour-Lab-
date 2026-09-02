import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { loadEstimate, type SavedEstimate } from "@/lib/estimate-session";
import { formatNzd } from "@/lib/paint";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book / Quote | Auto Paint Lab Auckland" },
      {
        name: "description",
        content:
          "Request a free quote or book car spray painting, paint repairs or mobile paint with Auto Paint Lab, Auckland sole trader.",
      },
      {
        name: "keywords",
        content: "book car paint Auckland, paint quote Auckland, spray painting booking, automotive paint quote NZ",
      },
    ],
  }),
});

function BookingPage() {
  const [saved, setSaved] = useState<SavedEstimate | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSaved(loadEstimate());
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const booking = Object.fromEntries(form.entries());
    const all = { ...booking, estimate: saved, submittedAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("apl-bookings") || "[]") as unknown[];
    localStorage.setItem("apl-bookings", JSON.stringify([all, ...existing].slice(0, 20)));
    setSent(true);
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Auckland automotive paint quote
      </p>
      <h1 className="mt-3 font-display text-5xl font-bold">Tell us what needs painting.</h1>
      <p className="mt-4 max-w-xl text-muted">
        Owner / operator Anthony ·{" "}
        <a className="text-accent" href="tel:+642041104094">
          020 411 04094
        </a>
      </p>

      {saved ? (
        <div className="mt-8 rounded-xl border border-border bg-surface p-5">
          <p className="font-display text-xs tracking-[0.16em] text-accent">Estimate attached</p>
          <p className="mt-1 font-display text-2xl font-semibold">
            {saved.vehicle.year} {saved.vehicle.make} {saved.vehicle.model} · {saved.vehicle.plate}
          </p>
          <p className="text-sm text-muted">
            {saved.areaCm2} cm² · {saved.vehicle.colour} · {formatNzd(saved.result.low)} –{" "}
            {formatNzd(saved.result.high)}
            {saved.pickup ? " · pickup included" : ""}
            {saved.photoName ? ` · photo: ${saved.photoName}` : ""}
          </p>
        </div>
      ) : (
        <p className="mt-6 text-sm text-muted">
          No estimate attached yet. You can still book — or generate one from the home page first.
        </p>
      )}

      {sent ? (
        <div className="mt-10 rounded-xl border border-border bg-elevated p-8">
          <h2 className="font-display text-3xl font-bold">Request received.</h2>
          <p className="mt-3 text-muted">
            Anthony will contact you to confirm the job, colour match and timing. For same-day
            questions call 020 411 04094.
          </p>
        </div>
      ) : (
        <form className="mt-8 space-y-5 rounded-xl border border-border bg-surface p-6" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle</Label>
              <Input
                id="vehicle"
                name="vehicle"
                defaultValue={
                  saved
                    ? `${saved.vehicle.year} ${saved.vehicle.make} ${saved.vehicle.model} (${saved.vehicle.plate})`
                    : ""
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="suburb">Suburb</Label>
              <Input id="suburb" name="suburb" placeholder="e.g. Penrose" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="damage">What needs doing</Label>
            <Textarea
              id="damage"
              name="damage"
              defaultValue={
                saved
                  ? `Preliminary estimate ${formatNzd(saved.result.low)}–${formatNzd(saved.result.high)} for ${saved.areaCm2} cm² ${saved.vehicle.colour} (${saved.systemId}).`
                  : ""
              }
            />
          </div>
          <Button type="submit" size="lg">
            Send booking request
          </Button>
        </form>
      )}
    </main>
  );
}
