import React, { useEffect, useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import { useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useAspect, useTexture } from "@react-three/drei";

import useMouse from "@/lib/useMouse";
import useDimension from "@/lib/useDimension";
import { fragment, vertex } from "@/lib/shader";
import { projects } from "@/constants";

export default function Model({
  activeProject,
}: {
  activeProject: number | null;
}) {
  const mesh = useRef(null);

  const mouse = useMouse();
  const dimension = useDimension();

  const textures = projects.map((project) => useTexture(project.src));
  const uniforms = useRef({
    uTexture: { value: textures[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uAlpha: { value: 0.0 },
  });

  const scale = useAspect(
    textures[0].image.width,
    textures[0].image.height,
    0.225
  );

  useEffect(() => {
    if (activeProject != null) {
      // @ts-ignore
      mesh.current.material.uniforms.uTexture.value = textures[activeProject];
    }
  }, [activeProject]);

  const { viewport } = useThree();

  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const lerp = (x: any, y: any, a: number) => x * (1 - a) + y * a;
  useFrame(() => {
    const { x, y } = mouse;

    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();

    smoothMouse.x.set(lerp(smoothX, x.get(), 0.1));
    smoothMouse.y.set(lerp(smoothY, y.get(), 0.1));

    // @ts-ignore
    mesh.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: -1 * (y.get() - smoothY),
    };
  });

  const x = useTransform(
    mouse.x,
    [0, dimension.width],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    mouse.y,
    [0, dimension.height],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );

  return (
    <motion.mesh position-x={x} position-y={y} ref={mesh} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      {/* <meshBasicMaterial wireframe color={"red"} /> */}
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </motion.mesh>
  );
}
