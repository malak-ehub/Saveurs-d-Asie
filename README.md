# Restaurant Asiatique - Application React

## 🍜 Description
Application web complète pour un restaurant asiatique avec gestion de menu, commandes en ligne et réservations.

## ✨ Fonctionnalités

- **Page d'Accueil** : Présentation du restaurant avec sections héro, caractéristiques et spécialités
- **Menu** : Catalogue de plats avec filtrage par catégorie
- **Commande** : Système de panier avec formulaire de livraison
- **Réservation** : Formulaire de réservation de table
- **Contact** : Page de contact avec informations et formulaire

## 🛠️ Technologies Utilisées

- React 18
- React Router DOM (navigation)
- Axios (requêtes API)
- MockAPI (backend simulé)
- CSS3 (styles personnalisés)

## 📦 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**
```bash
cd restaurant-asiatique
npm install
```

3. **Configurer MockAPI (OPTIONNEL)**

Pour utiliser une vraie API MockAPI :

a. Allez sur [https://mockapi.io/](https://mockapi.io/)
b. Créez un compte gratuit
c. Créez un nouveau projet
d. Créez les ressources suivantes :

**Resource 1 : plats**
```json
{
  "nom": "Ramen Tonkotsu",
  "categorie": "Japonais",
  "prix": 85,
  "description": "Nouilles dans un bouillon de porc crémeux",
  "image": "🍜"
}
```

**Resource 2 : reservations**
```json
{
  "nom": "Jean Dupont",
  "telephone": "+212 XXX-XXXXXX",
  "email": "jean@example.com",
  "date": "2026-02-20",
  "heure": "19:00",
  "personnes": 4,
  "message": "Anniversaire",
  "dateCreation": "2026-02-15T10:00:00.000Z"
}
```

**Resource 3 : commandes**
```json
{
  "nom": "Marie Martin",
  "telephone": "+212 XXX-XXXXXX",
  "adresse": "123 Rue Example, Rabat",
  "instructions": "Sonner 2 fois",
  "items": [],
  "total": 150,
  "date": "2026-02-15T10:00:00.000Z"
}
```

e. Copiez l'URL de votre endpoint API
f. Remplacez dans `src/services/api.js` :
```javascript
const API_URL = 'VOTRE_URL_MOCKAPI_ICI';
```

**Note** : Si vous ne configurez pas MockAPI, l'application fonctionnera quand même avec des données par défaut !

4. **Lancer l'application**
```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
restaurant-asiatique/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js       # Barre de navigation
│   │   └── Footer.js       # Pied de page
│   ├── pages/
│   │   ├── Home.js         # Page d'accueil
│   │   ├── Menu.js         # Page menu
│   │   ├── Commande.js     # Page commande
│   │   ├── Reservation.js  # Page réservation
│   │   └── Contact.js      # Page contact
│   ├── services/
│   │   └── api.js          # Services API MockAPI
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Menu.css
│   │   ├── Commande.css
│   │   ├── Reservation.css
│   │   └── Contact.css
│   ├── App.js              # Composant principal
│   ├── App.css             # Styles globaux
│   ├── index.js            # Point d'entrée
│   └── index.css           # Styles de base
├── package.json
└── README.md
```

## 🎨 Personnalisation

### Modifier les couleurs
Les couleurs principales sont définies dans les fichiers CSS :
- Rouge/Rose : `#d4145a`
- Orange : `#fbb034`
- Bleu foncé : `#2c3e50`

### Ajouter des plats
Modifiez le tableau `platsDefaut` dans `src/pages/Menu.js` et `src/pages/Commande.js`

### Modifier les informations du restaurant
Éditez `src/components/Footer.js` et `src/pages/Contact.js`

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte aux :
- 📱 Mobiles (< 768px)
- 💻 Tablettes (768px - 1024px)
- 🖥️ Desktops (> 1024px)

## 🚀 Build pour la Production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `build/`

## 🔧 Scripts Disponibles

- `npm start` : Lance l'application en mode développement
- `npm run build` : Crée une version optimisée pour la production
- `npm test` : Lance les tests
- `npm run eject` : Éjecte la configuration (attention, irréversible !)

## 🌟 Fonctionnalités Futures

- [ ] Intégration paiement en ligne
- [ ] Système d'authentification utilisateur
- [ ] Panel d'administration
- [ ] Notifications par email
- [ ] Système de points fidélité
- [ ] Avis et notes des clients

## 📝 License

Ce projet est open source et disponible sous licence MIT.

## 👨‍💻 Auteur

Créé avec ❤️ pour apprendre React et MockAPI

## 🆘 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Consultez la documentation React : [https://react.dev/](https://react.dev/)
- Consultez la documentation MockAPI : [https://mockapi.io/docs](https://mockapi.io/docs)
