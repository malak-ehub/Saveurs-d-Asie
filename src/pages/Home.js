import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue chez Saveurs d'Asie</h1>
          <p className="hero-subtitle">Découvrez l'authenticité de la cuisine asiatique</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">Voir le Menu</Link>
            <Link to="/reservation" className="btn btn-secondary">Réserver une Table</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🍱</div>
            <h3>Cuisine Authentique</h3>
            <p>Des recettes traditionnelles préparées avec des ingrédients frais</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Livraison Rapide</h3>
            <p>Commandez en ligne et recevez vos plats en 30 minutes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Chefs Expérimentés</h3>
            <p>Une équipe passionnée pour vous servir les meilleurs plats</p>
          </div>
        </div>
      </section>

      <section className="specialties">
        <div className="specialties-container">
          <h2>Nos Spécialités</h2>
          <div className="specialties-grid">
            <div className="specialty-item">
              <div className="specialty-image">🍜</div>
              <h4>Ramen</h4>
              <p>Nouilles japonaises dans un bouillon savoureux</p>
            </div>
            <div className="specialty-item">
              <div className="specialty-image">🍣</div>
              <h4>Sushi</h4>
              <p>Sushi et sashimi fraîchement préparés</p>
            </div>
            <div className="specialty-item">
              <div className="specialty-image">🥟</div>
              <h4>Dim Sum</h4>
              <p>Raviolis vapeur et autres délices chinois</p>
            </div>
            <div className="specialty-item">
              <div className="specialty-image">🍛</div>
              <h4>Curry</h4>
              <p>Curry thaï épicé et parfumé</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Prêt à commander ?</h2>
          <p>Découvrez notre menu complet et passez votre commande en ligne</p>
          <Link to="/commande" className="btn btn-large">Commander Maintenant</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
