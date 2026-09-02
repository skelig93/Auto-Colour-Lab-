import type { EstimateResult, PaintSystemId, PanelId } from "./paint";
import type { VehicleRecord } from "./vehicles";

export type SavedEstimate = {
  vehicle: VehicleRecord;
  areaCm2: number;
  panelId: PanelId;
  systemId: PaintSystemId;
  pickup: boolean;
  result: EstimateResult;
  photoName?: string;
  createdAt: string;
};

const KEY = "apl-estimate";

export function saveEstimate(data: SavedEstimate) {
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function loadEstimate(): SavedEstimate | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedEstimate;
  } catch {
    return null;
  }
}
