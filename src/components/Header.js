import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🍜 Saveurs d'Asie</h1>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/commande" className="nav-link">Commander</Link>
          <Link to="/reservation" className="nav-link">Réserver</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
