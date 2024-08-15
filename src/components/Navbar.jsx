import React from 'react'
// import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='nav-bar'>
      <p>Logo</p>
      <ul className="ul-navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Foods</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
 