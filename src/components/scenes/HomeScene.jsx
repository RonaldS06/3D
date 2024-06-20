import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PresentationControls,
  Stars,
} from "@react-three/drei";
import React from "react";
import Decorations from "../Decorations";
import VideoPlane from "../VideoPlane";
import { Monitor } from "../modelo";

const HomeScene = () => {
  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <color attach="background" args={["#151520"]} />
      <pointLight
        position={[10, 15, 15]}
        color="#570c0c"
        castShadow
        intensity={15}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={[-10, 85, -15]}
        color="#570c0c"
        castShadow
        intensity={15}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="city" /> {/* background - "city, sunset"*/}
      <ambientLight /> {/* intensity={30} */}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      <group position={[0, -5, 0]}>
        <VideoPlane videourl={"../../../public/video1.mp4"} />
        <VideoPlane
          videourl={"../../../public/video2.mp4"}
          position={[0, 10, -0.6]}
          rotation-y={Math.PI}
        />

        {/* Video Muro*/}
        <mesh position={[0, 10, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color="black"
            roughness={0.2}
            metalness={0.5}
            envMapIntensity={0.5}
          />
        </mesh>

        {/* Base */}
        <mesh>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial
            color="black"
            roughness={0.05}
            metalness={0}
            envMapIntensity={0}
          />
        </mesh>
      </group>
      {/* Decoraciones */}
      <Decorations />
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={10}
        saturation={0}
        fade
        speed={4}
      />
      <Monitor position={[-7, 2, 2]} rotation-y={3.5} />
    </PresentationControls>
  );
};

export default HomeScene;
