import type { PaintSystemId } from "./paint";

export type VehicleRecord = {
  plate: string;
  year: number;
  make: string;
  model: string;
  colour: string;
  colourHex: string;
  body: string;
  fuel: string;
  cc: number;
  paintSystem: PaintSystemId;
  vehicleTier: number;
  source: "catalogue" | "live";
};

/**
 * Vehicle catalogue inspired by common NZ-registered vehicles.
 * For production accuracy, replace lookupVehicle with a call to the
 * official CarJam API (https://www.carjam.co.nz) using your developer key:
 *   GET https://www.carjam.co.nz/api/car/?key=YOUR_KEY&plate=XXXX&basic=1&f=json
 * Map the returned make, model, year_of_manufacture, main_colour, fuel_type, etc.
 * into VehicleRecord. Until then this local catalogue provides consistent,
 * realistic estimates for demo and offline use.
 */
const CATALOGUE: Omit<VehicleRecord, "plate" | "source">[] = [
  { year: 2018, make: "Toyota", model: "Corolla", colour: "Glacier White", colourHex: "#F4F1EA", body: "Hatch", fuel: "Petrol", cc: 1798, paintSystem: "solid", vehicleTier: 1 },
  { year: 2019, make: "Toyota", model: "Hilux", colour: "Silver Sky", colourHex: "#C5C8CB", body: "Ute", fuel: "Diesel", cc: 2755, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2021, make: "Toyota", model: "RAV4", colour: "Graphite", colourHex: "#4A4E53", body: "SUV", fuel: "Hybrid", cc: 2487, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2016, make: "Toyota", model: "Aqua", colour: "Ice Blue", colourHex: "#B7C9D4", body: "Hatch", fuel: "Hybrid", cc: 1496, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2020, make: "Ford", model: "Ranger", colour: "Frozen White", colourHex: "#F2F0EA", body: "Ute", fuel: "Diesel", cc: 1996, paintSystem: "solid", vehicleTier: 1.15 },
  { year: 2017, make: "Ford", model: "Focus", colour: "Magnetic Grey", colourHex: "#5B5F63", body: "Hatch", fuel: "Petrol", cc: 1498, paintSystem: "metallic", vehicleTier: 1.15 },
  { year: 2014, make: "Holden", model: "Commodore VF", colour: "Heron White", colourHex: "#EFECE4", body: "Sedan", fuel: "Petrol", cc: 3600, paintSystem: "solid", vehicleTier: 1.15 },
  { year: 2015, make: "Holden", model: "Colorado", colour: "Red Hot", colourHex: "#9B1B1B", body: "Ute", fuel: "Diesel", cc: 2776, paintSystem: "solid", vehicleTier: 1.15 },
  { year: 2018, make: "Mazda", model: "CX-5", colour: "Soul Red Crystal", colourHex: "#7A0E16", body: "SUV", fuel: "Petrol", cc: 1998, paintSystem: "three-stage", vehicleTier: 1 },
  { year: 2019, make: "Mazda", model: "3", colour: "Machine Grey", colourHex: "#55585C", body: "Hatch", fuel: "Petrol", cc: 1998, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2022, make: "Mazda", model: "BT-50", colour: "Ingot Silver", colourHex: "#C9CDD1", body: "Ute", fuel: "Diesel", cc: 2999, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2013, make: "Nissan", model: "Navara", colour: "Twilight Grey", colourHex: "#5C6166", body: "Ute", fuel: "Diesel", cc: 2488, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2016, make: "Nissan", model: "X-Trail", colour: "Diamond Black", colourHex: "#121314", body: "SUV", fuel: "Petrol", cc: 2488, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2020, make: "Mitsubishi", model: "Triton", colour: "Red Metallic", colourHex: "#8B1A1F", body: "Ute", fuel: "Diesel", cc: 2442, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2018, make: "Mitsubishi", model: "Outlander", colour: "White Pearl", colourHex: "#F3F0E8", body: "SUV", fuel: "Petrol", cc: 2360, paintSystem: "pearl", vehicleTier: 1 },
  { year: 2017, make: "Honda", model: "Civic", colour: "Rallye Red", colourHex: "#C8102E", body: "Hatch", fuel: "Petrol", cc: 1498, paintSystem: "solid", vehicleTier: 1 },
  { year: 2015, make: "Honda", model: "CR-V", colour: "Modern Steel", colourHex: "#6B7075", body: "SUV", fuel: "Petrol", cc: 2356, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2019, make: "Subaru", model: "Outback", colour: "Crystal Black Silica", colourHex: "#0E0F10", body: "Wagon", fuel: "Petrol", cc: 2498, paintSystem: "pearl", vehicleTier: 1.15 },
  { year: 2012, make: "Subaru", model: "Impreza", colour: "World Rally Blue", colourHex: "#1C4F9C", body: "Hatch", fuel: "Petrol", cc: 1994, paintSystem: "pearl", vehicleTier: 1.15 },
  { year: 2021, make: "Kia", model: "Sportage", colour: "Snow White Pearl", colourHex: "#F6F3EC", body: "SUV", fuel: "Petrol", cc: 1999, paintSystem: "pearl", vehicleTier: 1 },
  { year: 2020, make: "Hyundai", model: "Tucson", colour: "Phantom Black", colourHex: "#111214", body: "SUV", fuel: "Petrol", cc: 1999, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2018, make: "Hyundai", model: "i30", colour: "Polar White", colourHex: "#F1EEE6", body: "Hatch", fuel: "Petrol", cc: 1999, paintSystem: "solid", vehicleTier: 1 },
  { year: 2016, make: "Volkswagen", model: "Golf", colour: "Tornado Red", colourHex: "#B5121B", body: "Hatch", fuel: "Petrol", cc: 1395, paintSystem: "solid", vehicleTier: 1.3 },
  { year: 2019, make: "Volkswagen", model: "Tiguan", colour: "Pure White", colourHex: "#F5F2EA", body: "SUV", fuel: "Petrol", cc: 1984, paintSystem: "solid", vehicleTier: 1.3 },
  { year: 2014, make: "BMW", model: "320i", colour: "Alpine White", colourHex: "#F4F1EA", body: "Sedan", fuel: "Petrol", cc: 1997, paintSystem: "solid", vehicleTier: 1.3 },
  { year: 2017, make: "BMW", model: "X3", colour: "Mineral Grey", colourHex: "#5A5E62", body: "SUV", fuel: "Diesel", cc: 1995, paintSystem: "metallic", vehicleTier: 1.3 },
  { year: 2015, make: "Mercedes-Benz", model: "C200", colour: "Obsidian Black", colourHex: "#0C0D0E", body: "Sedan", fuel: "Petrol", cc: 1991, paintSystem: "metallic", vehicleTier: 1.3 },
  { year: 2018, make: "Audi", model: "A4", colour: "Glacier White", colourHex: "#EEEBE3", body: "Sedan", fuel: "Petrol", cc: 1984, paintSystem: "pearl", vehicleTier: 1.3 },
  { year: 2011, make: "Suzuki", model: "Swift", colour: "Super Black", colourHex: "#111111", body: "Hatch", fuel: "Petrol", cc: 1242, paintSystem: "solid", vehicleTier: 1 },
  { year: 2022, make: "Tesla", model: "Model 3", colour: "Pearl White Multi-Coat", colourHex: "#F7F4ED", body: "Sedan", fuel: "Electric", cc: 0, paintSystem: "pearl", vehicleTier: 1.3 },
  { year: 2008, make: "Mazda", model: "Demio", colour: "Sunlight Silver", colourHex: "#C4C7CA", body: "Hatch", fuel: "Petrol", cc: 1349, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2006, make: "Toyota", model: "Camry", colour: "Champagne Pearl", colourHex: "#D8C7A8", body: "Sedan", fuel: "Petrol", cc: 2362, paintSystem: "pearl", vehicleTier: 1 },
  { year: 1998, make: "Pontiac", model: "Firebird", colour: "Black", colourHex: "#101112", body: "Coupe", fuel: "Petrol", cc: 5700, paintSystem: "solid", vehicleTier: 1.15 },
  { year: 2004, make: "Holden", model: "Commodore VY", colour: "Phantom Black", colourHex: "#141516", body: "Sedan", fuel: "Petrol", cc: 3565, paintSystem: "metallic", vehicleTier: 1.15 },
  { year: 2010, make: "Ford", model: "Falcon FG", colour: "Lightning Strike", colourHex: "#C5C8CC", body: "Sedan", fuel: "Petrol", cc: 3984, paintSystem: "metallic", vehicleTier: 1.15 },
  { year: 2023, make: "Isuzu", model: "D-Max", colour: "Mercury Silver", colourHex: "#BFC3C7", body: "Ute", fuel: "Diesel", cc: 1898, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2019, make: "Jeep", model: "Wrangler", colour: "Firecracker Red", colourHex: "#B31B1B", body: "SUV", fuel: "Petrol", cc: 3604, paintSystem: "solid", vehicleTier: 1.15 },
  { year: 2009, make: "Mini", model: "Cooper S", colour: "British Racing Green", colourHex: "#1B3D2F", body: "Hatch", fuel: "Petrol", cc: 1598, paintSystem: "solid", vehicleTier: 1.3 },
  // Extra common NZ fleet entries for better coverage
  { year: 2021, make: "Toyota", model: "Hilux", colour: "Graphite", colourHex: "#3A3D42", body: "Ute", fuel: "Diesel", cc: 2755, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2022, make: "Ford", model: "Ranger", colour: "Shadow Black", colourHex: "#1A1B1D", body: "Ute", fuel: "Diesel", cc: 1996, paintSystem: "metallic", vehicleTier: 1.15 },
  { year: 2019, make: "Toyota", model: "Corolla", colour: "Oxide Bronze", colourHex: "#5C4A3A", body: "Hatch", fuel: "Hybrid", cc: 1798, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2020, make: "Mazda", model: "CX-5", colour: "Deep Crystal Blue", colourHex: "#1A3A5C", body: "SUV", fuel: "Petrol", cc: 1998, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2018, make: "Nissan", model: "Qashqai", colour: "Magnetic Black", colourHex: "#151618", body: "SUV", fuel: "Petrol", cc: 1997, paintSystem: "metallic", vehicleTier: 1 },
  { year: 2021, make: "Kia", model: "Stonic", colour: "Clear White", colourHex: "#F5F2EA", body: "SUV", fuel: "Petrol", cc: 1368, paintSystem: "solid", vehicleTier: 1 },
  { year: 2017, make: "Holden", model: "Trax", colour: "Sonic Blue", colourHex: "#2A4A7A", body: "SUV", fuel: "Petrol", cc: 1364, paintSystem: "metallic", vehicleTier: 1.15 },
  { year: 2023, make: "BYD", model: "Atto 3", colour: "Surf Blue", colourHex: "#3A6B8A", body: "SUV", fuel: "Electric", cc: 0, paintSystem: "metallic", vehicleTier: 1 },
];

const FEATURED: Record<string, Omit<VehicleRecord, "plate" | "source">> = {
  APL1: CATALOGUE[32],
  FIREBIRD: CATALOGUE[32],
  KITT: CATALOGUE[32],
  HILUX: CATALOGUE[1],
  RANGER: CATALOGUE[4],
  DEMO: CATALOGUE[0],
  // Common test / demo plates map to popular NZ utes and cars
  ABC123: CATALOGUE[0],
  XYZ999: CATALOGUE[4],
};

export function normalisePlate(raw: string) {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
}

export function isPlausibleNzPlate(plate: string) {
  if (plate.length < 3 || plate.length > 8) return false;
  return /^[A-Z0-9]+$/.test(plate);
}

function hashPlate(plate: string) {
  let h = 2166136261;
  for (let i = 0; i < plate.length; i++) {
    h ^= plate.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Lookup vehicle by NZ plate.
 * Uses featured mappings first, then a stable hash into the catalogue so the
 * same plate always returns the same vehicle (important for estimates).
 * For live CarJam accuracy, swap the body of this function for an API call.
 */
export function lookupVehicle(rawPlate: string): VehicleRecord | null {
  const plate = normalisePlate(rawPlate);
  if (!isPlausibleNzPlate(plate)) return null;
  const featured = FEATURED[plate];
  if (featured) return { ...featured, plate, source: "catalogue" };
  const idx = hashPlate(plate) % CATALOGUE.length;
  const rec = CATALOGUE[idx];
  return { ...rec, plate, source: "catalogue" };
}

export const SAMPLE_PLATES = ["APL1", "HILUX", "RANGER", "DEMO"];
