# 🍜 Restaurant Asiatique - Guide de Démarrage Rapide

## 🚀 Installation en 3 étapes

### 1. Ouvrir le terminal dans le dossier du projet
```bash
cd restaurant-asiatique
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer l'application
```bash
npm start
```

L'application s'ouvrira automatiquement sur http://localhost:3000

---

## 📱 Pages disponibles

- **/** - Page d'accueil
- **/menu** - Catalogue des plats
- **/commande** - Commander en ligne
- **/reservation** - Réserver une table
- **/contact** - Nous contacter

---

## 🔧 Configuration MockAPI (Optionnel)

L'application fonctionne déjà avec des données par défaut !

Pour connecter à une vraie API MockAPI :

1. Allez sur https://mockapi.io/ et créez un compte
2. Créez les ressources : `plats`, `reservations`, `commandes`
3. Consultez le fichier `MOCKAPI_SETUP.md` pour les détails
4. Modifiez `src/services/api.js` avec votre URL

---

## 🎨 Personnalisation

### Changer les couleurs
Éditez les fichiers CSS dans `src/styles/`

### Modifier les plats
Éditez `platsDefaut` dans :
- `src/pages/Menu.js`
- `src/pages/Commande.js`

### Changer les infos du restaurant
Éditez :
- `src/components/Footer.js`
- `src/pages/Contact.js`

---

## 📦 Structure du projet

```
restaurant-asiatique/
├── src/
│   ├── components/    # Header, Footer
│   ├── pages/         # Toutes les pages
│   ├── services/      # API MockAPI
│   └── styles/        # Fichiers CSS
├── public/
└── package.json
```

---

## ✨ Fonctionnalités

✅ Navigation multi-pages avec React Router
✅ Catalogue de plats avec filtres par catégorie
✅ Panier d'achat interactif
✅ Formulaire de commande avec livraison
✅ Système de réservation de tables
✅ Page de contact
✅ Design responsive (mobile, tablette, desktop)
✅ Intégration MockAPI (optionnelle)
✅ Animations et transitions fluides

---

## 🆘 Besoin d'aide ?

Consultez le fichier `README.md` pour plus de détails !

**Bon développement ! 🎉**
