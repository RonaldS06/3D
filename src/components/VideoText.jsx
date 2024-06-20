import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { MeshBasicMaterial } from "three";
import * as THREE from "three";

const VideoText = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/video2.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text font="/Outfit-Bold.ttf" fontSize={6} letterSpacing={-0.06} {...props}>
      Ronald
      <meshBasicMaterial toneMapped={false} color={"#dbdbdb"} fog={true}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={useThree.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
};

export default VideoText;
