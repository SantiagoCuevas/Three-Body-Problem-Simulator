import type { Body } from "../physics/Body.type";

export interface SimConfig {
  gravity: number;
  softener: number;
  bodies: Body[];
}
