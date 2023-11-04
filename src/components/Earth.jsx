import { Text } from "@react-three/drei";

import Planet from "./Planet";
import Clouds from "./Clouds";

const Earth = () => {
  return (
    <mesh>
      <ambientLight intensity={0.06} />
      <Planet />
      <Clouds />
      <Text
        text="はじまりの東北家"
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 1.51]}
        font="/fonts/ZenOldMincho-Black.woff"
        fontSize={0.6}
      />
    </mesh>
  );
};

export default Earth;
