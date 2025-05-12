import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const getResponsiveConfig = (width) => {
  if (width < 500) {
    return {
      scale: 1.8,
      cameraPosition: [0, 1.5, 7],
    };
  } else if (width < 768) {
    return {
      scale: 2.2,
      cameraPosition: [0, 2, 8],
    };
  } else {
    return {
      scale: 3,
      cameraPosition: [0, 2.5, 9],
    };
  }
};

const Earth = ({ onLoad, scale }) => {
  const earth = useGLTF("./alien_planet/scene.gltf");

  useEffect(() => {
    onLoad?.();
  }, [onLoad]);

  return <primitive object={earth.scene} scale={scale} position-y={0} />;
};

const EarthCanvas = ({ onModelLoaded }) => {
  const [config, setConfig] = useState(getResponsiveConfig(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: config.cameraPosition,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <hemisphereLight intensity={0.45} groundColor='black' />
        <spotLight
          position={[0, 0, 100]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <Earth onLoad={onModelLoaded} scale={config.scale} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
