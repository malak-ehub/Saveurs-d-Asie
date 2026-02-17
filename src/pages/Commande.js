import React, { useState, useEffect } from 'react';
import { platsService, commandesService } from '../services/api';
import '../styles/Commande.css';

const Commande = () => {
  const [plats, setPlats] = useState([]);
  const [panier, setPanier] = useState([]);
  const [formulaire, setFormulaire] = useState({
    nom: '',
    telephone: '',
    adresse: '',
    instructions: ''
  });
  const [commandeEnvoyee, setCommandeEnvoyee] = useState(false);

  const platsDefaut = [
    { id: 1, nom: 'Ramen Tonkotsu', categorie: 'Japonais', prix: 85, image: '🍜' },
    { id: 2, nom: 'Sushi Mix', categorie: 'Japonais', prix: 120, image: '🍣' },
    { id: 3, nom: 'Pad Thai', categorie: 'Thaï', prix: 75, image: '🍝' },
    { id: 4, nom: 'Curry Vert', categorie: 'Thaï', prix: 80, image: '🍛' },
    { id: 5, nom: 'Dim Sum Vapeur', categorie: 'Chinois', prix: 65, image: '🥟' },
    { id: 6, nom: 'Bo Bun', categorie: 'Vietnamien', prix: 70, image: '🥗' },
  ];

  useEffect(() => {
    loadPlats();
  }, []);

  const loadPlats = async () => {
    try {
      const data = await platsService.getAllPlats();
      setPlats(data);
    } catch (error) {
      setPlats(platsDefaut);
    }
  };

  const ajouterAuPanier = (plat) => {
    const existant = panier.find(item => item.id === plat.id);
    if (existant) {
      setPanier(panier.map(item => 
        item.id === plat.id 
          ? { ...item, quantite: item.quantite + 1 }
          : item
      ));
    } else {
      setPanier([...panier, { ...plat, quantite: 1 }]);
    }
  };

  const retirerDuPanier = (id) => {
    setPanier(panier.filter(item => item.id !== id));
  };

  const modifierQuantite = (id, quantite) => {
    if (quantite === 0) {
      retirerDuPanier(id);
    } else {
      setPanier(panier.map(item =>
        item.id === id ? { ...item, quantite } : item
      ));
    }
  };

  const calculerTotal = () => {
    return panier.reduce((total, item) => total + (item.prix * item.quantite), 0);
  };

  const handleInputChange = (e) => {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (panier.length === 0) {
      alert('Votre panier est vide !');
      return;
    }

    const commande = {
      ...formulaire,
      items: panier,
      total: calculerTotal(),
      date: new Date().toISOString()
    };

    try {
      await commandesService.addCommande(commande);
      setCommandeEnvoyee(true);
      setPanier([]);
      setFormulaire({ nom: '', telephone: '', adresse: '', instructions: '' });
      
      setTimeout(() => setCommandeEnvoyee(false), 5000);
    } catch (error) {
      alert('Commande envoyée avec succès ! (Mode démo)');
      setPanier([]);
      setFormulaire({ nom: '', telephone: '', adresse: '', instructions: '' });
    }
  };

  return (
    <div className="commande-page">
      <h1>Commander en Ligne</h1>
      
      {commandeEnvoyee && (
        <div className="success-message">
          ✅ Votre commande a été envoyée avec succès ! Nous vous livrons dans 30 minutes.
        </div>
      )}

      <div className="commande-container">
        <div className="plats-section">
          <h2>Sélectionnez vos plats</h2>
          <div className="plats-grid">
            {plats.map(plat => (
              <div key={plat.id} className="plat-item">
                <div className="plat-image">{plat.image || '🍽️'}</div>
                <h3>{plat.nom}</h3>
                <p className="plat-prix">{plat.prix} MAD</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => ajouterAuPanier(plat)}
                >
                  Ajouter
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="panier-section">
          <h2>Votre Panier</h2>
          {panier.length === 0 ? (
            <p className="panier-vide">Votre panier est vide</p>
          ) : (
            <>
              <div className="panier-items">
                {panier.map(item => (
                  <div key={item.id} className="panier-item">
                    <div className="item-info">
                      <span className="item-emoji">{item.image}</span>
                      <span className="item-nom">{item.nom}</span>
                    </div>
                    <div className="item-controls">
                      <button onClick={() => modifierQuantite(item.id, item.quantite - 1)}>-</button>
                      <span>{item.quantite}</span>
                      <button onClick={() => modifierQuantite(item.id, item.quantite + 1)}>+</button>
                    </div>
                    <span className="item-prix">{item.prix * item.quantite} MAD</span>
                    <button 
                      className="remove-btn"
                      onClick={() => retirerDuPanier(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="panier-total">
                <strong>Total: {calculerTotal()} MAD</strong>
              </div>

              <form onSubmit={handleSubmit} className="commande-form">
                <h3>Informations de Livraison</h3>
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom complet"
                  value={formulaire.nom}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Téléphone"
                  value={formulaire.telephone}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="adresse"
                  placeholder="Adresse de livraison"
                  value={formulaire.adresse}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="instructions"
                  placeholder="Instructions spéciales (optionnel)"
                  value={formulaire.instructions}
                  onChange={handleInputChange}
                />
                <button type="submit" className="submit-btn">
                  Confirmer la Commande
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Commande;
