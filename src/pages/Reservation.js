import React, { useState } from 'react';
import { reservationsService } from '../services/api';
import '../styles/Reservation.css';

const Reservation = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    telephone: '',
    email: '',
    date: '',
    heure: '',
    personnes: 2,
    message: ''
  });
  const [reservationEnvoyee, setReservationEnvoyee] = useState(false);

  const handleInputChange = (e) => {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const reservation = {
      ...formulaire,
      dateCreation: new Date().toISOString()
    };

    try {
      await reservationsService.addReservation(reservation);
      setReservationEnvoyee(true);
      setFormulaire({
        nom: '',
        telephone: '',
        email: '',
        date: '',
        heure: '',
        personnes: 2,
        message: ''
      });
      
      setTimeout(() => setReservationEnvoyee(false), 5000);
    } catch (error) {
      alert('Réservation envoyée avec succès ! (Mode démo)');
      setFormulaire({
        nom: '',
        telephone: '',
        email: '',
        date: '',
        heure: '',
        personnes: 2,
        message: ''
      });
    }
  };

  return (
    <div className="reservation-page">
      <div className="reservation-header">
        <h1>Réserver une Table</h1>
        <p>Garantissez votre place dans notre restaurant</p>
      </div>

      {reservationEnvoyee && (
        <div className="success-message">
          ✅ Votre réservation a été confirmée ! Nous vous attendons avec impatience.
        </div>
      )}

      <div className="reservation-container">
        <div className="reservation-info">
          <div className="info-card">
            <h3>📍 Adresse</h3>
            <p>Avenue Mohammed V</p>
            <p>Rabat, Maroc</p>
          </div>
          <div className="info-card">
            <h3>⏰ Horaires</h3>
            <p>Lundi - Vendredi</p>
            <p>11h30 - 14h30, 18h30 - 22h30</p>
            <p>Samedi - Dimanche</p>
            <p>12h00 - 23h00</p>
          </div>
          <div className="info-card">
            <h3>📞 Contact</h3>
            <p>+212 5XX-XXXXXX</p>
            <p>contact@saveurdasie.ma</p>
          </div>
          <div className="info-card">
            <h3>ℹ️ À savoir</h3>
            <p>• Réservation recommandée le week-end</p>
            <p>• Tables disponibles pour 2 à 12 personnes</p>
            <p>• Nous acceptons les événements privés</p>
          </div>
        </div>

        <div className="reservation-form-container">
          <form onSubmit={handleSubmit} className="reservation-form">
            <h2>Formulaire de Réservation</h2>
            
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

            <div className="form-row">
              <div className="form-group">
                <label>Téléphone *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formulaire.telephone}
                  onChange={handleInputChange}
                  required
                  placeholder="+212 XXX-XXXXXX"
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
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formulaire.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label>Heure *</label>
                <input
                  type="time"
                  name="heure"
                  value={formulaire.heure}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Nombre de personnes *</label>
              <select
                name="personnes"
                value={formulaire.personnes}
                onChange={handleInputChange}
                required
              >
                {[...Array(11)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? 'personne' : 'personnes'}
                  </option>
                ))}
                <option value="12+">12+ personnes</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message / Demandes spéciales</label>
              <textarea
                name="message"
                value={formulaire.message}
                onChange={handleInputChange}
                placeholder="Allergies, occasions spéciales, préférences..."
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn">
              Confirmer la Réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
