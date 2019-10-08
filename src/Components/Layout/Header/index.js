import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="header">
       <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
     
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
   
      </header>
    )
  }  
  export default Header;