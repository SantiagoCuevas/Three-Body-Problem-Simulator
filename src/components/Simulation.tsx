import type { Body } from "../physics/Body.type";
import type { Vector3 } from "../physics/vectors.type";
import type { SimConfig } from "../simulation/SimConfig.type";

const simState: SimConfig = {
  gravity: 1,
  softener: 0.1,
  bodies: [
    {
      displayName: "Moon",
      radius: 10,
      mass: 20,
      velocity: { x: 2, y: 4, z: 5 },
      acceleration: { x: 0, y: 0, z: 0 },
      color: "white",
      position: { x: 250, y: 0, z: 0 },
    },
    {
      displayName: "Sun",
      radius: 100,
      mass: 1000,
      velocity: { x: 4, y: 2, z: 1 },
      acceleration: { x: 0, y: 0, z: 0 },
      color: "yellow",
      position: { x: 0, y: 0, z: 0 },
    },
  ],
};

const calcAccForceFromActor = (body: Body, actor: Body) => {
  const direction: Vector3 = {
    x: actor.position.x - body.position.x,
    y: actor.position.y - body.position.y,
    z: actor.position.z - actor.position.z,
  };

  const dist2 =
    direction.x * direction.x +
    direction.y * direction.y +
    direction.z * direction.z +
    simState.softener * simState.softener;

  const strength = (simState.gravity * actor.mass) / dist2;

  const dist = Math.sqrt(dist2);

  const unitDirection: Vector3 = {
    x: direction.x / dist,
    y: direction.y / dist,
    z: direction.z / dist,
  };

  const accFromActor: Vector3 = {
    x: strength * unitDirection.x,
    y: strength * unitDirection.y,
    z: strength * unitDirection.z,
  };
  return accFromActor;
};

const calcAcceleration = (bodies: Body[]) => {
  bodies.forEach((body, i) => {
    const acceleration: Vector3 = { x: 0, y: 0, z: 0 };
    bodies.forEach((actor, j) => {
      if (j === i) return;
      const force = calcAccForceFromActor(body, actor);
      acceleration.x += force.x;
      acceleration.y += force.y;
      acceleration.z += force.z;
    });
    body.acceleration = acceleration;
  });
};

calcAcceleration(simState.bodies);
console.log(simState.bodies);

export const Simulation = () => {
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
