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
      name: 'Book-Searcher',
      description: 'MERN/GrapgQL',
      link: "https://gasiorowski-book-searcher-9fe69fedaf2f.herokuapp.com/",
      repo: "https://github.com/JGatz123/Book_Search_Engine"
    },
    {
      name: 'Weather',
      description: 'API/Javascript',
      link: "https://jgatz123.github.io/GasiorowskiWeatherApp/",
      repo: "https://github.com/JGatz123/GasiorowskiWeatherApp"
    },
    {
      name: 'New-Search',
      description: 'JavaScript/CSS/API',
      link: "https://rhonvyramos.github.io/libel_news_reports/",
      repo: "https://github.com/JimmyJr77/libel"
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
