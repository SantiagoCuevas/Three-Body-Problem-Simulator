import { Canvas } from "@react-three/fiber";
import "./App.css";
import { CameraController } from "./components/CameraController";

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
          <CameraController />
          <color attach="background" args={["#131"]} />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
