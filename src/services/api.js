import axios from 'axios';

// Remplacez cette URL par votre propre endpoint MockAPI
// Allez sur https://mockapi.io/ pour créer votre API
const API_URL = 'https://699458d7fade7a9ec0f51c91.mockapi.io/';

// Service pour les plats
export const platsService = {
  // Récupérer tous les plats
  getAllPlats: async () => {
    try {
      const response = await axios.get(`${API_URL}/plats`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des plats:', error);
      throw error;
    }
  },

  // Récupérer un plat par ID
  getPlatById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/plats/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du plat:', error);
      throw error;
    }
  },

  // Ajouter un plat
  addPlat: async (plat) => {
    try {
      const response = await axios.post(`${API_URL}/plats`, plat);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout du plat:', error);
      throw error;
    }
  },

  // Mettre à jour un plat
  updatePlat: async (id, plat) => {
    try {
      const response = await axios.put(`${API_URL}/plats/${id}`, plat);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du plat:', error);
      throw error;
    }
  },

  // Supprimer un plat
  deletePlat: async (id) => {
    try {
      await axios.delete(`${API_URL}/plats/${id}`);
    } catch (error) {
      console.error('Erreur lors de la suppression du plat:', error);
      throw error;
    }
  }
};

// Service pour les réservations
export const reservationsService = {
  getAllReservations: async () => {
    try {
      const response = await axios.get(`${API_URL}/reservations`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des réservations:', error);
      throw error;
    }
  },

  addReservation: async (reservation) => {
    try {
      const response = await axios.post(`${API_URL}/reservations`, reservation);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la réservation:', error);
      throw error;
    }
  },

  deleteReservation: async (id) => {
    try {
      await axios.delete(`${API_URL}/reservations/${id}`);
    } catch (error) {
      console.error('Erreur lors de la suppression de la réservation:', error);
      throw error;
    }
  }
};

// Service pour les commandes
export const commandesService = {
  getAllCommandes: async () => {
    try {
      const response = await axios.get(`${API_URL}/commandes`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
      throw error;
    }
  },

  addCommande: async (commande) => {
    try {
      const response = await axios.post(`${API_URL}/commandes`, commande);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la commande:', error);
      throw error;
    }
  }
};
