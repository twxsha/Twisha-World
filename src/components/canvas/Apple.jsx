import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Apple = () => {
  const apple = useGLTF("./apple_logo/scene.gltf");

  return (      
      <primitive object={apple.scene} scale={.65} position-y={-40}/>
 );
};

const AppleCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position:[0,0,100],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={6}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
        />
        <hemisphereLight intensity={.15} groundColor='white' />
        <spotLight
          position={[-40, 10, 200]}
          angle={0.5}
          penumbra={1}
          intensity={.75}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={5} />
        <Apple />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AppleCanvas;
