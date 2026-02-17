import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Saveurs d'Asie</h3>
          <p>Votre restaurant asiatique de confiance</p>
        </div>
        <div className="footer-section">
          <h4>Horaires</h4>
          <p>Lundi - Vendredi: 11h30 - 14h30, 18h30 - 22h30</p>
          <p>Samedi - Dimanche: 12h00 - 23h00</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 +212 5XX-XXXXXX</p>
          <p>📧 contact@saveurdasie.ma</p>
          <p>📍 Rabat, Maroc</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Saveurs d'Asie. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
