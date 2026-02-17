import React, { useState, useEffect } from 'react';
import { platsService } from '../services/api';
import '../styles/Menu.css';

const Menu = () => {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Données par défaut si MockAPI n'est pas configuré
  const platsDefaut = [
    { id: 1, nom: 'Ramen Tonkotsu', categorie: 'Japonais', prix: 85, description: 'Nouilles dans un bouillon de porc crémeux', image: '🍜' },
    { id: 2, nom: 'Sushi Mix', categorie: 'Japonais', prix: 120, description: 'Assortiment de 12 sushis variés', image: '🍣' },
    { id: 3, nom: 'Pad Thai', categorie: 'Thaï', prix: 75, description: 'Nouilles sautées à la sauce tamarind', image: '🍝' },
    { id: 4, nom: 'Curry Vert', categorie: 'Thaï', prix: 80, description: 'Curry vert épicé au lait de coco', image: '🍛' },
    { id: 5, nom: 'Dim Sum Vapeur', categorie: 'Chinois', prix: 65, description: 'Raviolis vapeur assortis', image: '🥟' },
    { id: 6, nom: 'Bo Bun', categorie: 'Vietnamien', prix: 70, description: 'Salade de vermicelles au bœuf', image: '🥗' },
    { id: 7, nom: 'Poulet General Tao', categorie: 'Chinois', prix: 85, description: 'Poulet croustillant sauce aigre-douce', image: '🍗' },
    { id: 8, nom: 'Tom Yum', categorie: 'Thaï', prix: 60, description: 'Soupe épicée aux crevettes', image: '🍲' },
  ];

  useEffect(() => {
    loadPlats();
  }, []);

  const loadPlats = async () => {
    try {
      const data = await platsService.getAllPlats();
      setPlats(data);
    } catch (error) {
      console.log('Utilisation des données par défaut');
      setPlats(platsDefaut);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['Tous', ...new Set(plats.map(plat => plat.categorie))];

  const platsFiltres = selectedCategory === 'Tous' 
    ? plats 
    : plats.filter(plat => plat.categorie === selectedCategory);

  if (loading) {
    return <div className="loading">Chargement du menu...</div>;
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Notre Menu</h1>
        <p>Découvrez nos délicieux plats asiatiques</p>
      </div>

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {platsFiltres.map(plat => (
          <div key={plat.id} className="menu-card">
            <div className="menu-card-image">{plat.image || '🍽️'}</div>
            <div className="menu-card-content">
              <h3>{plat.nom}</h3>
              <p className="category-tag">{plat.categorie}</p>
              <p className="description">{plat.description}</p>
              <div className="menu-card-footer">
                <span className="price">{plat.prix} MAD</span>
                <button className="add-btn">Ajouter</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
