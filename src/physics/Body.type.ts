import type { threeDimensionalVector } from "./vectors.type";

export interface Body {
  name: string;
  size: number;
  color: string;
  position: threeDimensionalVector;
}
