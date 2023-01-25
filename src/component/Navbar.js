import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
   
  return (
  <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">bebeler </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/" className="nav-link">Anasayfa</Link>
        </li>
        <li className="nav-item">
         <Link to="/family"  className="nav-link">aile</Link>
        </li>
        <li className="nav-item">
         <Link to="/animals"  className="nav-link">hayvanlar</Link>
        </li>
        <li className="nav-item">
         <Link to="/plants"  className="nav-link">bitkiler</Link>
        </li>
        <li className="nav-item">
         <Link to="/buildings"  className="nav-link">yapılar</Link>
        </li>
        <li className="nav-item">
         <Link to="/planets"  className="nav-link">gezegenler</Link>
        </li>
      </ul>
    </div>
  </div>
     </nav>
  </div>
      
    
  )
}

export default Navbar
