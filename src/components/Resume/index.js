import React from 'react';
import resume from "../../assets/large/portraits/JohnGasiorowskiResume.pdf"

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Check out <a href={resume} download>Resume</a>
        </p>
        <h3>Front-end and Client Side Topics</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React.js</li>
          <li>Bootstrap and CSS Libraries</li>
        </ul>
        <h3>Back-end and Server Side Topics</h3>
        <ul className="skills">
          <li>Node.js Environment</li>
          <li>MySQL, Sequelize ORM</li>
          <li>MongoDB, Mongoose ODM</li>
          <li>Express.js</li>
          <li>REST API Architecture</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
