import React from 'react';
import coverImage from '../../assets/large/bgrimg.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h2 className="myName">John Gasiorowski </h2>
      <img className = "cvrimg" src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
