import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

import CanvasLoader from "../Loader";

const DevX = () => {
  const devx = useGLTF("./DevX.gltf");

  const redMaterial = new MeshStandardMaterial({
    color: 0x6794e0,
  });

  // Traverse the model and apply the new material
  devx.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = redMaterial;
    }
  });

  return (      
      <primitive object={devx.scene} scale={.85} position-x={-50} position-y={-20}/>
 );
};

const DevXCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position:[-20,0,100],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
        />
        <hemisphereLight intensity={.15} groundColor='white' />
        <spotLight
          position={[-40, 20, 200]}
          angle={0.5}
          penumbra={1}
          intensity={.75}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={5} />
        <DevX />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DevXCanvas;
