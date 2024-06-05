import React from "react";

import { Canvas } from "@react-three/fiber";

import Model from "@/components/Model";

export default function Scene() {
  return (
    <div className="relative h-screen">
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
}
