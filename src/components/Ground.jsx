import { Reflector, useTexture } from "@react-three/drei";
import React from "react";

const Ground = () => {
  const [floor, normal] = useTexture([
    "/rubber_tiles_diff_4k.jpg",
    "/rubber_tiles_nor_gl_4k.jpg",
  ]);
  return (
    <Reflector
      position={[0, 0, 15]}
      blur={[340, 100]}
      resolution={512}
      args={[50, 50]}
      mirror={0.5}
      mixBlur={27}
      mixStrength={3.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color={"#c3c3c3"}
          metalness={0.8}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
};

export default Ground;
