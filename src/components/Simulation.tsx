import type { SimConfig } from "../simulation/SimConfig.type";

export const Simulation = () => {
  const simState: SimConfig = {
    bodies: [
      {
        displayName: "Earth",
        radius: 10,
        color: "blue",
        position: { x: 0, y: 0, z: 0 },
      },
      {
        displayName: "Mars",
        radius: 10,
        color: "orange",
        position: { x: 30, y: 0, z: 0 },
      },
    ],
  };
  return (
    <>
      {simState.bodies.map((body) => (
        <mesh position={[body.position.x, body.position.y, body.position.z]}>
          <meshStandardMaterial color={body.color} />
          <sphereGeometry args={[body.radius]} />
        </mesh>
      ))}
    </>
  );
};
