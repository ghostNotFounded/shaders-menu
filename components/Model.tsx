import React from "react";

import { motion } from "framer-motion-3d";

import useMouse from "@/lib/useMouse";
import { useTransform } from "framer-motion";

export default function Model() {
  const mouse = useMouse();

  const x = useTransform(mouse.x, [0, window.innerWidth], []);

  return (
    <motion.mesh position-x={mouse.x} position-y={mouse.y}>
      <planeGeometry args={[2, 3, 15, 15]} />
      <meshBasicMaterial color={"red"} />
    </motion.mesh>
  );
}
