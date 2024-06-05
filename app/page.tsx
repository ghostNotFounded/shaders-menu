"use client";

import React, { useEffect, useState } from "react";

import Lenis from "lenis";

import Projects from "@/components/Projects";
import Scene from "@/components/Scene";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <main>
      <Scene activeProject={activeProject} />
      <div className="h-[50vh]" />
      <Projects setActiveProject={setActiveProject} />
      <div className="h-[50vh]" />
    </main>
  );
}
