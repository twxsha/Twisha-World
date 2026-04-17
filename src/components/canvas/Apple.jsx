import React, { Suspense, useEffect, useState, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";

// Responsive config
const getResponsiveConfig = (width) => {
  if (width < 500) {
    return {
      scale: 0.35,
      positionY: -18,
      cameraPosition: [0, 0, 80],
    };
  } else if (width < 768) {
    return {
      scale: 0.5,
      positionY: -28,
      cameraPosition: [0, 0, 90],
    };
  } else {
    return {
      scale: 0.65,
      positionY: -40,
      cameraPosition: [0, 0, 100],
    };
  }
};

const Apple = ({ scale, positionY, shouldRotate }) => {
  const { scene } = useGLTF("./apple_logo/scene.gltf");
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const ref = useRef();
  const rotated = useRef(0);

  useFrame((_, delta) => {
    if (shouldRotate && ref.current && rotated.current < Math.PI * 2) {
      const step = delta * 1.5;
      ref.current.rotation.y += step;
      rotated.current += step;
    }
  });

  return <primitive ref={ref} object={clonedScene} scale={scale} position-y={positionY} />;
};

const AppleCanvas = () => {
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
        camera={{
          fov: 60,
          near: 0.1,
          far: 200,
          position: config.cameraPosition,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.2}
          />
          <hemisphereLight intensity={0.15} groundColor="white" />
          <spotLight
            position={[-40, 10, 200]}
            angle={0.5}
            penumbra={1}
            intensity={0.75}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={5} />
          <Apple scale={config.scale} positionY={config.positionY} shouldRotate={inView} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AppleCanvas;
