import React from 'react';
import logo from './../assets/hadeslogo.svg';
import {Link} from 'react-router-dom';

function Logo() {
  return (
    <div className="logoContainer">
        <Link to="/"><img className="logo" src={logo} alt="HADES" /></Link> 
    </div>
  );
}

export default Logo;