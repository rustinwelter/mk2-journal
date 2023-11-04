import { useTexture } from "@react-three/drei";

const Universe = () => {
  const texture = useTexture("/images/stars_milky_way.webp");
  return (
    <mesh>
      <pointLight intensity={0.7} />
      <sphereGeometry args={[300, 300, 300]} />
      <meshStandardMaterial map={texture} side={1} />
    </mesh>
  );
};

export default Universe;
