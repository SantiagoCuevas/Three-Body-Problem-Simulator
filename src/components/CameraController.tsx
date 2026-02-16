import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

enum MoveType {
  POS = "position",
  ROT = "rotation",
}

const moveMap: any = {
  w: { axis: "z", by: -1, type: MoveType.POS },
  s: { axis: "z", by: 1, type: MoveType.POS },
  a: { axis: "x", by: -1, type: MoveType.POS },
  d: { axis: "x", by: 1, type: MoveType.POS },
  " ": { axis: "y", by: 1, type: MoveType.POS },
  Shift: { axis: "y", by: -1, type: MoveType.POS },
  ArrowUp: { axis: "x", by: 0.1, type: MoveType.ROT },
  ArrowDown: { axis: "x", by: -0.1, type: MoveType.ROT },
  ArrowLeft: { axis: "y", by: 0.1, type: MoveType.ROT },
  ArrowRight: { axis: "y", by: -0.1, type: MoveType.ROT },
} as const;

export const CameraController = () => {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      const newTransform = {
        position: {
          x: camera.position.x,
          y: camera.position.y,
          z: camera.position.z,
        },
        rotation: {
          x: camera.rotation.x,
          y: camera.rotation.y,
          z: camera.rotation.z,
        },
      };

      const move: any = moveMap[e.key];

      if (!move) return;
      e.preventDefault();
      newTransform[move.type][move.axis] += move.by;
      camera[move.type].set(
        newTransform[move.type].x,
        newTransform[move.type].y,
        newTransform[move.type].z,
      );
    });
  }, [camera]);

  return null;
};
