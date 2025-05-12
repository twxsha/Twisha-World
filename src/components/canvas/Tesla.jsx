import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Responsive config function
const getResponsiveConfig = (width) => {
  if (width < 500) {
    return {
      scale: 0.09,
      positionY: -1,
      cameraPosition: [0, 0.5, 4],
    };
  } else if (width < 768) {
    return {
      scale: 0.13,
      positionY: -1.5,
      cameraPosition: [0, 0.7, 5],
    };
  } else {
    return {
      scale: 0.17,
      positionY: -2,
      cameraPosition: [0, 1, 6],
    };
  }
};

const Tesla = ({ scale, positionY }) => {
  const tesla = useGLTF("./tesla_super_charger/scene.gltf");
  return <primitive object={tesla.scene} scale={scale} position-y={positionY} />;
};

const TeslaCanvas = () => {
  const [config, setConfig] = useState(getResponsiveConfig(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setConfig(getResponsiveConfig(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-[400px] aspect-square mx-auto flex justify-center items-center">
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
            autoRotate={true}
            autoRotateSpeed={6}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <hemisphereLight intensity={0.85} groundColor="black" />
          <spotLight
            position={[0, -5, 0]}
            angle={0.5}
            penumbra={1}
            intensity={2.5}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={2} />
          <Tesla scale={config.scale} positionY={config.positionY} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TeslaCanvas;
