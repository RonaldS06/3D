import React, { useEffect, useState } from "react";
import * as THREE from "three";

const VideoPlane = ({ videourl, ...props }) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: videourl,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => {
    video.play();
  }, [video]);

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        position={[0, 10, 0.6]}
        scale={[16, 9, 1]}
        {...props}
      >
        <planeGeometry />
        <meshBasicMaterial toneMapped={false}>
          <videoTexture
            attach={"map"}
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
      </mesh>
    </>
  );
};

export default VideoPlane;
