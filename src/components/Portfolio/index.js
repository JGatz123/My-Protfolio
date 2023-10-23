import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Password-Generator',
      description: 'CSS/Javascript',
      link: "https://jgatz123.github.io/GasiorowskiPasswordGen/",
      repo: "https://github.com/JGatz123/GasiorowskiPasswordGen"
    },
    {
      name: 'JATE',
      description: 'IndexedDB/Webpack',
      link: "https://gasiorowski-text-editor-2e361a3f4a41.herokuapp.com/",
      repo: "https://github.com/JGatz123/Text-Editor"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
