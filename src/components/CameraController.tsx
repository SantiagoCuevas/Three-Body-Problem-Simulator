import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const CameraController = () => {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w": {
          camera.position.set(
            camera.position.x,
            camera.position.y,
            camera.position.z - 1,
          );
          break;
        }
        case "s": {
          camera.position.set(
            camera.position.x,
            camera.position.y,
            camera.position.z + 1,
          );
          break;
        }
        case "a": {
          camera.position.set(
            camera.position.x - 1,
            camera.position.y,
            camera.position.z,
          );
          break;
        }
        case "d": {
          camera.position.set(
            camera.position.x + 1,
            camera.position.y,
            camera.position.z,
          );
        }
      }
    });
  }, [camera]);

  return null;
};
