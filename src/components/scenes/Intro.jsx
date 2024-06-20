import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import * as THREE from "three";

const Intro = () => {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 15, 24 + state.mouse.y * 7, 60),
      0.05
    );
    state.camera.lookAt(1.3, 0, 0);
  });
};

export default Intro;
