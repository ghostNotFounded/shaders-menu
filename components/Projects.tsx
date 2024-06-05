import React from "react";

import { projects } from "@/constants";

export default function Projects() {
  return (
    <div>
      {projects.map((project, idx) => (
        <div className="text-3xl p-5 cursor-pointer hover:italic" key={idx}>
          {project.name}
        </div>
      ))}
    </div>
  );
}
