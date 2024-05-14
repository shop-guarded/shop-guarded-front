import React from 'react';
import './navbar.css';
import logo from './lg.png';

function Navbar() {
  return (
    <div className="navbar">
<a  className="pic" href="LoginScreen.js">
<img src={logo} alt="Votre logo" />
</a>
<a href='LoginScreen.js'>Shop</a>
      <a href="#">Repair workshop</a>
      <a href="#">Police</a>

      <div className="dropdown">
        <button className="dropbtn">Insurances
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Auto-Claims</a>
          <a href="#">Claims Processing</a>
          <a href="#">Contract Management</a>
        </div>
      </div> 
    <button className='btn'>Login</button>
    </div>
  );
}

export default Navbar;
