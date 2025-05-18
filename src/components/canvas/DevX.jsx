import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import CanvasLoader from "../Loader";

// Responsive config function
const getResponsiveConfig = (width) => {
  if (width < 500) {
    return {
      scale: 0.35,
      position: [-30, -10, 0],
      cameraPosition: [-20, 0, 80],
    };
  } else if (width < 768) {
    return {
      scale: 0.5,
      position: [-40, -15, 0],
      cameraPosition: [-20, 0, 90],
    };
  } else {
    return {
      scale: 0.65,
      position: [-50, -20, 0],
      cameraPosition: [-20, 0, 100],
    };
  }
};

const DevX = ({ scale, position }) => {
  const { scene } = useGLTF("./DevX.gltf");

  const clonedScene = useMemo(() => {
    const material = new MeshStandardMaterial({ color: 0x6794e0 });
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });
    return clone;
  }, [scene]);

  return <primitive object={clonedScene} scale={scale} position={position} />;
};

const DevXCanvas = () => {
  const [config, setConfig] = useState(getResponsiveConfig(window.innerWidth));

  useEffect(() => {
    const handleResize = () =>
      setConfig(getResponsiveConfig(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-[400px] aspect-square mx-auto flex justify-center items-center">
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 200,
          position: config.cameraPosition,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={5}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.2}
          />
          <hemisphereLight intensity={0.15} groundColor="white" />
          <spotLight
            position={[-40, 20, 200]}
            angle={0.5}
            penumbra={1}
            intensity={0.75}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={5} />
          <DevX scale={config.scale} position={config.position} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DevXCanvas;
