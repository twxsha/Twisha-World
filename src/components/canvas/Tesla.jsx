import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

const Tesla = ({ scale, positionY, shouldRotate }) => {
  const tesla = useGLTF("./tesla_super_charger/scene.gltf");
  const ref = useRef();
  const rotated = useRef(0);

  useFrame((_, delta) => {
    if (shouldRotate && ref.current && rotated.current < Math.PI * 2) {
      const step = delta * 1.5;
      ref.current.rotation.y += step;
      rotated.current += step;
    }
  });

  return <primitive ref={ref} object={tesla.scene} scale={scale} position-y={positionY} />;
};

const TeslaCanvas = () => {
  const [config, setConfig] = useState(getResponsiveConfig(window.innerWidth));
  const [inView, setInView] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleResize = () => setConfig(getResponsiveConfig(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.6 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[400px] aspect-square mx-auto flex justify-center items-center">
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
          <Tesla scale={config.scale} positionY={config.positionY} shouldRotate={inView} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TeslaCanvas;
