import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Monitor(props) {
  const { nodes, materials } = useGLTF("./models/monitor.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[-0.079, 0.583, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/monitor.glb");
