import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import * as THREE from "three";

const Intro = () => {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 35, 13 + state.mouse.y * 13, 90),
      0.05
    );
    state.camera.lookAt(1, 0, 0);
  });
};

export default Intro;
