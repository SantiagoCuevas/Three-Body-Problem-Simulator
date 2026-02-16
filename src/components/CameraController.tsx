import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const CameraController = () => {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const newPosition = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };

      switch (e.key) {
        case "w": {
          newPosition.z -= 1;
          break;
        }
        case "s": {
          newPosition.z += 1;
          break;
        }
        case "a": {
          newPosition.x -= 1;
          break;
        }
        case "d": {
          newPosition.x += 1;
        }
      }
      camera.position.set(newPosition.x, newPosition.y, newPosition.z);
    });
  }, [camera]);

  return null;
};
