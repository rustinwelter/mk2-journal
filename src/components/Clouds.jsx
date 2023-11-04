import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Clouds = () => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  const texture = useTexture("/images/earth_clouds.webp");
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.51, 32, 32]} />
      <meshStandardMaterial map={texture} transparent opacity={0.6} />
    </mesh>
  );
};

export default Clouds;
