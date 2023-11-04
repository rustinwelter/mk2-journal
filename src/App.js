import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import "./App.css";

import Earth from "./components/Earth";
import Universe from "./components/Universe";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Universe />
          <pointLight intensity={0.01} />
          <spotLight position={[0, 0, 5]} intensity={2} distance={200} />
          <Earth />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
