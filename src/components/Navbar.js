import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => (
  <nav className="navBar">
    <div className="navItems">
      <ul className="navLinks">
        <li><Link to="/">MyProfile</Link></li>
        <li><Link to="missions">Missions</Link></li>
        <li><Link to="rockets">Rockets</Link></li>
      </ul>
    </div>
    <div className="logoTitleContainer">
      <h2 className="navTitle">Space Travelers Hub</h2>
      <img className="logo" src={logo} alt="logo" />
    </div>
  </nav>
);

export default Navbar;
