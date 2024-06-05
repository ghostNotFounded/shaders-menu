import React from "react";

import { Canvas } from "@react-three/fiber";

import Model from "@/components/Model";

export default function Scene({
  activeProject,
}: {
  activeProject: number | null;
}) {
  return (
    <div className="fixed h-screen w-full">
      <Canvas>
        <Model activeProject={activeProject} />
      </Canvas>
    </div>
  );
}
