import React, { Dispatch, SetStateAction } from "react";

import { projects } from "@/constants";

export default function Projects({
  setActiveProject,
}: {
  setActiveProject: (idx: number | null) => void;
}) {
  return (
    <div className="relative mix-blend-difference z-10 text-white w-full">
      <ul
        className="border-b border-neutral-500 hover:cursor-none"
        onMouseLeave={() => setActiveProject(null)}
      >
        {projects.map((project, idx) => (
          <li
            onMouseOver={() => setActiveProject(idx)}
            className="group text-4xl border-t border-neutral-500 p-5 hover:scale-y-105 flex justify-between"
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
