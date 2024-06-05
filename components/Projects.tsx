import React from "react";

import { projects } from "@/constants";

export default function Projects() {
  return (
    <div className="relative mix-blend-difference z-10 text-white h-screen w-full">
      <ul className="border-b border-neutral-500">
        {projects.map((project, idx) => (
          <li
            className="group text-4xl border-t border-neutral-500 p-5 cursor-pointer flex justify-between"
            key={idx}
          >
            <span className="group-hover:italic">{project.name}</span>
            <span className="opacity-0 group-hover:opacity-100 text-purple-300">
              {project.japaneseName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
