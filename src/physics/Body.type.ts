import type { Vector3 } from "@react-three/fiber";

export interface Body {
  displayName: string;
  radius: number;
  mass: number;
  velocity: Vector3;
  acceleration: Vector3;
  color: string;
  position: Vector3;
}
