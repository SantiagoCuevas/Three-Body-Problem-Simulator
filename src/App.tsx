import { Canvas } from "@react-three/fiber";
import "./App.css";
import { CameraController } from "./components/CameraController";
import { Simulation } from "./components/Simulation";

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas camera={{ fov: 75, position: [0, 0, 200] }}>
          <CameraController />
          <color attach="background" args={["#131"]} />
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <Simulation />
        </Canvas>
      </div>
    </>
  );
}

export default App;
