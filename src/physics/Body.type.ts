import type { Vector3 } from "@react-three/fiber";

export interface Body {
  displayName: string;
  radius: number;
  mass: number;
  velocity: number;
  color: string;
  position: Vector3;
}
