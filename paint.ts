export const BASE_AREA_CM2 = 632;
export const BASE_PRICE_NZD = 300;
export const RATE_PER_CM2 = BASE_PRICE_NZD / BASE_AREA_CM2;
export const MIN_JOB_NZD = 220;
export const PICKUP_NZD = 80;

export type PaintSystemId =
  | "solid"
  | "metallic"
  | "pearl"
  | "three-stage"
  | "special";

export type PaintSystem = {
  id: PaintSystemId;
  name: string;
  multiplier: number;
  note: string;
};

export const PAINT_SYSTEMS: PaintSystem[] = [
  {
    id: "solid",
    name: "Solid / Standard",
    multiplier: 1,
    note: "Single-stage or 2K solid colour. Fastest mix and blend.",
  },
  {
    id: "metallic",
    name: "Metallic",
    multiplier: 1.18,
    note: "Aluminium flake. Extra blend into adjacent panels.",
  },
  {
    id: "pearl",
    name: "Pearl / Mica",
    multiplier: 1.32,
    note: "Mica pearl. Needs wider blend and extra coats.",
  },
  {
    id: "three-stage",
    name: "3-Stage Pearl",
    multiplier: 1.55,
    note: "Ground coat + mid-coat + clear. Highest material cost.",
  },
  {
    id: "special",
    name: "Matte / Special",
    multiplier: 1.48,
    note: "Matte clear or custom mix. Extra masking and finish control.",
  },
];

export type PanelId =
  | "bumper"
  | "guard"
  | "door"
  | "bonnet"
  | "boot"
  | "roof"
  | "sill"
  | "other";

export const PANELS: { id: PanelId; label: string; multiplier: number }[] = [
  { id: "bumper", label: "Bumper / fascia", multiplier: 0.96 },
  { id: "guard", label: "Guard / fender", multiplier: 1.04 },
  { id: "door", label: "Door", multiplier: 1.06 },
  { id: "bonnet", label: "Bonnet", multiplier: 1.12 },
  { id: "boot", label: "Boot / tailgate", multiplier: 1.08 },
  { id: "roof", label: "Roof", multiplier: 1.2 },
  { id: "sill", label: "Sill / rocker", multiplier: 1.1 },
  { id: "other", label: "Other / mixed", multiplier: 1 },
];

export type EstimateInput = {
  areaCm2: number;
  systemId: PaintSystemId;
  panelId: PanelId;
  pickup: boolean;
  vehicleTier: number;
};

export type SystemQuote = {
  system: PaintSystem;
  labourAndMaterials: number;
  total: number;
  isVehicleSystem: boolean;
};

export type EstimateResult = {
  areaCm2: number;
  ratePerCm2: number;
  panelMultiplier: number;
  vehicleTier: number;
  pickup: number;
  low: number;
  high: number;
  recommended: number;
  quotes: SystemQuote[];
};

function roundTen(n: number) {
  return Math.round(n / 10) * 10;
}

export function priceFor(
  areaCm2: number,
  system: PaintSystem,
  panelMultiplier: number,
  vehicleTier: number,
) {
  const raw = areaCm2 * RATE_PER_CM2 * system.multiplier * panelMultiplier * vehicleTier;
  return Math.max(MIN_JOB_NZD, raw);
}

export function buildEstimate(input: EstimateInput): EstimateResult {
  const panel = PANELS.find((p) => p.id === input.panelId) ?? PANELS[7];
  const area = Math.max(40, Math.min(20000, input.areaCm2));
  const pickup = input.pickup ? PICKUP_NZD : 0;
  const quotes = PAINT_SYSTEMS.map((system) => {
    const labourAndMaterials = priceFor(
      area,
      system,
      panel.multiplier,
      input.vehicleTier,
    );
    return {
      system,
      labourAndMaterials,
      total: labourAndMaterials + pickup,
      isVehicleSystem: system.id === input.systemId,
    };
  });
  const recommendedQuote = quotes.find((q) => q.isVehicleSystem) ?? quotes[0];
  const recommended = roundTen(recommendedQuote.total);
  const low = roundTen(recommended * 0.92);
  const high = roundTen(recommended * 1.18);
  return {
    areaCm2: area,
    ratePerCm2: RATE_PER_CM2,
    panelMultiplier: panel.multiplier,
    vehicleTier: input.vehicleTier,
    pickup,
    low: Math.max(MIN_JOB_NZD, low),
    high: Math.max(high, low + 40),
    recommended,
    quotes,
  };
}

export function formatNzd(n: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    maximumFractionDigits: 0,
  }).format(n);
}
