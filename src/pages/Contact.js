import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [messageEnvoye, setMessageEnvoye] = useState(false);

  const handleInputChange = (e) => {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulation d'envoi
    console.log('Message envoyé:', formulaire);
    setMessageEnvoye(true);
    setFormulaire({
      nom: '',
      email: '',
      sujet: '',
      message: ''
    });
    
    setTimeout(() => setMessageEnvoye(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Nous sommes là pour répondre à vos questions</p>
      </div>

      {messageEnvoye && (
        <div className="success-message">
          ✅ Votre message a été envoyé ! Nous vous répondrons sous 24h.
        </div>
      )}

      <div className="contact-container">
        <div className="contact-info-section">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Adresse</h3>
            <p>Avenue Mohammed V</p>
            <p>Rabat 10000, Maroc</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Téléphone</h3>
            <p>+212 5XX-XXXXXX</p>
            <p>Lun-Dim: 11h30 - 23h00</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>contact@saveurdasie.ma</p>
            <p>Réponse sous 24h</p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Horaires d'ouverture</h3>
            <p>Lundi - Vendredi</p>
            <p>11h30 - 14h30, 18h30 - 22h30</p>
            <p>Samedi - Dimanche</p>
            <p>12h00 - 23h00</p>
          </div>

          <div className="social-media">
            <h3>Suivez-nous</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">📘 Facebook</a>
              <a href="#" className="social-icon">📷 Instagram</a>
              <a href="#" className="social-icon">🐦 Twitter</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Envoyez-nous un message</h2>
            
            <div className="form-group">
              <label>Nom complet *</label>
              <input
                type="text"
                name="nom"
                value={formulaire.nom}
                onChange={handleInputChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formulaire.email}
                onChange={handleInputChange}
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label>Sujet *</label>
              <select
                name="sujet"
                value={formulaire.sujet}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="reservation">Réservation</option>
                <option value="commande">Commande</option>
                <option value="menu">Question sur le menu</option>
                <option value="evenement">Événement privé</option>
                <option value="feedback">Commentaires</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formulaire.message}
                onChange={handleInputChange}
                required
                placeholder="Votre message..."
                rows="6"
              />
            </div>

            <button type="submit" className="submit-btn">
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Notre Emplacement</h2>
        <div className="map-placeholder">
          <p>🗺️ Carte Google Maps</p>
          <p>Avenue Mohammed V, Rabat, Maroc</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
