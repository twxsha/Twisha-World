import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Tesla = () => {
  const tesla = useGLTF("./tesla_super_charger/scene.gltf");

  return (      
      <primitive object={tesla.scene} scale={.17} position-y={-2}/>
 );
};

const TeslaCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 0, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={6}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <hemisphereLight intensity={.85} groundColor='black' />
        <spotLight
          position={[0, -5, 0]}
          angle={0.5}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2} />
        <Tesla />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TeslaCanvas;
