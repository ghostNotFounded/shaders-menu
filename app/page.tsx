"use client";

import React, { useEffect } from "react";

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

  return (
    <main>
      <Scene />
      {/* <div className="h-[50vh]" />
      <Projects />
      <div className="h-[50vh]" /> */}
    </main>
  );
}
