import { RoundedBox } from "@react-three/drei";
import React from "react";

const Decorations = () => {
  return (
    <group position={[0, 0, 0]}>
      <RoundedBox
        receiveShadow
        castShadow
        position={[-7, 1, -2.6]}
        radius={0.015}
        smoothness={10}
        scale={[4.2, 2, 2]}
      >
        <meshStandardMaterial
          color="#f4ae00"
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </RoundedBox>
      <mesh position={[5, 1, 5]}>
        <icosahedronGeometry />
        <meshStandardMaterial
          color={"#8e00f4"}
          envMapIntensity={0.8}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
      <mesh
        receiveShadow
        castShadow
        rotation-x={-Math.PI / 2}
        position={[-8, 1.1, 2]}
        scale={[2, 2, 2]}
      >
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color="#2d2d2d"
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
          wireframe
        />
      </mesh>
    </group>
  );
};

export default Decorations;
