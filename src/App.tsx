import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <color attach="background" args={["#131"]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
