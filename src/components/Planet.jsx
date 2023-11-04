import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import Modal from "./Modal/Modal";

const Planet = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });
  const texture = useTexture("/images/earth_daymap.webp");
  return (
    <mesh
      ref={ref}
      onClick={() => {
        setOpenModal(true);
      }}
    >
      <sphereGeometry args={[1.5, 20, 14]} />
      <meshStandardMaterial map={texture} />
      <Modal
        open={openModal}
        onClose={(e) => {
          setOpenModal(false);
          e.stopPropagation();
        }}
      />
    </mesh>
  );
};

export default Planet;
