import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PresentationControls,
  Stars,
} from "@react-three/drei";
import React, { Suspense } from "react";
import Decorations from "../Decorations";
import VideoPlane from "../VideoPlane";
import { Monitor } from "../modelo";
import { VideoTexture } from "three";
import VideoText from "../VideoText";
import Ground from "../Ground";

const HomeScene = () => {
  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <fog attach="fog" args={["black", 15, 20]} />
      <color attach="background" args={["#151520"]} />
      {/* <Environment preset="city" />  */}
      {/* background - "city, sunset"*/}
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} /> {/* intensity={30} */}
        {/* <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper> */}
        <spotLight position={[0, 12, 20]} intensity={135} />
        <directionalLight position={[50, 10, 1]} intensity={0.1} />
        <group position={[0, -5, 0]}>
          {/* <mesh position={[0, 7.3, 0]}> */}
          <VideoText position={[0, 7.3, 0]} />
          {/* </mesh> */}
          <mesh position={[0, 5.01, 3]}>
            <Ground />
          </mesh>
          {/* Base */}
          <mesh>
            <cylinderGeometry args={[10, 10, 10, 64]} />
            <meshStandardMaterial
              color="black"
              roughness={0.05}
              metalness={3}
              envMapIntensity={0}
            />
          </mesh>
        </group>
        <Decorations />
      </Suspense>
      {/* Decoraciones */}
      {/* <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={10}
        saturation={0}
        fade
        speed={4}
      /> */}
      <Monitor position={[-8, 2, -3]} rotation-y={-3.5} />
    </PresentationControls>
  );
};

export default HomeScene;
