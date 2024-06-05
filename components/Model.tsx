import React from "react";

import { useThree } from "@react-three/fiber";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

import useMouse from "@/lib/useMouse";
import useDimension from "@/lib/useDimension";
import { fragment, vertex } from "@/lib/shader";

export default function Model() {
  const mouse = useMouse();
  const dimension = useDimension();

  const { viewport } = useThree();

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
    <motion.mesh position-x={x} position-y={y}>
      <planeGeometry args={[2, 3, 15, 15]} />
      {/* <meshBasicMaterial wireframe color={"red"} /> */}
      <shaderMaterial fragmentShader={fragment} vertexShader={vertex} />
    </motion.mesh>
  );
}
