// LANDMARKS 
export interface Landmark {
  name: string;
  type: string;
  distance: number;
}

// LOCATION 
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  continent: string;
  coordinates: Coordinates;
  nearbyLandmarks: Landmark[];
}

// DEFENSES 
export interface Enchantment {
  name: string;
  level: number;
}

export interface Wall {
  material: string;
  height: number;
  enchantments: Enchantment[];
}

export interface Armament {
  weaponType: string;
  ammunitionType: string;
  ammunitionCount: number;
}

export interface Guard {
  name: string;
  rank: string;
}

export interface Tower {
  name: string;
  height: number;
  armament: Armament;
  guards: Guard[];
}

export interface Defenses {
  walls: Wall;
  towers: Tower[];
}

// INHABITANTS
export interface EquipmentSoldier {
  weapon: string;
  armor: string;
  shield: string;
}

export interface EquipmentMage {
  staff: string;
  robe: string;
  amulet: string;
}

export interface Profession {
  type: string;
  count: number;
}

export interface Role {
  role: string;
  count?: number;
  equipment?: EquipmentSoldier | EquipmentMage;
  professions?: Profession[];
}

export interface Inhabitants {
  roles: Role[];
}

// RESOURCES 
export interface FoodResource {
  type: string;
  quantity: number;
  unit: string;
}

export interface WaterResource {
  source: string;
  capacity: number;
  unit: string;
}

export interface Storage {
  food: FoodResource;
  water: WaterResource;
}

export interface WeaponResource {
  type: string;
  quantity: number;
}

export interface ShieldResource {
  type: string;
  quantity: number;
}

export interface Armory {
  weapons: WeaponResource[];
  shields: ShieldResource[];
}

export interface Resources {
  storage: Storage;
  armory: Armory;
}

// -------------------- HISTORY --------------------
export interface Founded {
  year: number;
  by: string;
}

export interface MajorEvent {
  year: number;
  event: string;
  outcome: string;
  description: string;
}

export interface History {
  founded: Founded;
  majorEvents: MajorEvent[];
}

// -------------------- CITadel --------------------
export interface Citadel {
  name: string;
  location: Location;
  defenses: Defenses;
  inhabitants: Inhabitants;
  resources: Resources;
  history: History;
}
