# Configuration MockAPI - Exemples de Données

## Comment configurer MockAPI

1. Allez sur https://mockapi.io/
2. Créez un compte gratuit
3. Créez un nouveau projet
4. Créez les 3 ressources suivantes avec leurs schémas

---

## Resource 1 : plats

**Endpoint** : `/plats`

**Schéma** :
```json
{
  "nom": "string",
  "categorie": "string",
  "prix": "number",
  "description": "string",
  "image": "string"
}
```

**Exemples de données à ajouter** :

```json
[
  {
    "nom": "Ramen Tonkotsu",
    "categorie": "Japonais",
    "prix": 85,
    "description": "Nouilles dans un bouillon de porc crémeux avec œuf mollet",
    "image": "🍜"
  },
  {
    "nom": "Sushi Mix",
    "categorie": "Japonais",
    "prix": 120,
    "description": "Assortiment de 12 sushis variés avec sauce soja",
    "image": "🍣"
  },
  {
    "nom": "Pad Thai",
    "categorie": "Thaï",
    "prix": 75,
    "description": "Nouilles de riz sautées sauce tamarind, cacahuètes",
    "image": "🍝"
  },
  {
    "nom": "Curry Vert",
    "categorie": "Thaï",
    "prix": 80,
    "description": "Curry vert épicé au lait de coco avec légumes",
    "image": "🍛"
  },
  {
    "nom": "Dim Sum Vapeur",
    "categorie": "Chinois",
    "prix": 65,
    "description": "Raviolis vapeur assortis (6 pièces)",
    "image": "🥟"
  },
  {
    "nom": "Bo Bun",
    "categorie": "Vietnamien",
    "prix": 70,
    "description": "Salade de vermicelles au bœuf grillé",
    "image": "🥗"
  },
  {
    "nom": "Poulet General Tao",
    "categorie": "Chinois",
    "prix": 85,
    "description": "Poulet croustillant sauce aigre-douce épicée",
    "image": "🍗"
  },
  {
    "nom": "Tom Yum",
    "categorie": "Thaï",
    "prix": 60,
    "description": "Soupe épicée aux crevettes et citronnelle",
    "image": "🍲"
  },
  {
    "nom": "Maki Californie",
    "categorie": "Japonais",
    "prix": 55,
    "description": "8 makis au crabe, avocat et concombre",
    "image": "🍱"
  },
  {
    "nom": "Bœuf Lok Lak",
    "categorie": "Cambodgien",
    "prix": 90,
    "description": "Bœuf mariné sauté avec riz et œuf",
    "image": "🥩"
  }
]
```

---

## Resource 2 : reservations

**Endpoint** : `/reservations`

**Schéma** :
```json
{
  "nom": "string",
  "telephone": "string",
  "email": "string",
  "date": "string",
  "heure": "string",
  "personnes": "string",
  "message": "string",
  "dateCreation": "string"
}
```

**Exemple de données** :
```json
{
  "nom": "Ahmed Benali",
  "telephone": "+212 661-234567",
  "email": "ahmed@example.com",
  "date": "2026-02-20",
  "heure": "19:00",
  "personnes": "4",
  "message": "Anniversaire - merci de préparer une table près de la fenêtre",
  "dateCreation": "2026-02-15T10:00:00.000Z"
}
```

---

## Resource 3 : commandes

**Endpoint** : `/commandes`

**Schéma** :
```json
{
  "nom": "string",
  "telephone": "string",
  "adresse": "string",
  "instructions": "string",
  "items": "array",
  "total": "number",
  "date": "string"
}
```

**Exemple de données** :
```json
{
  "nom": "Fatima Alaoui",
  "telephone": "+212 662-345678",
  "adresse": "123 Avenue Mohammed V, Rabat 10000",
  "instructions": "Sonner 2 fois à l'interphone",
  "items": [
    {
      "id": 1,
      "nom": "Ramen Tonkotsu",
      "prix": 85,
      "quantite": 2,
      "image": "🍜"
    },
    {
      "id": 3,
      "nom": "Pad Thai",
      "prix": 75,
      "quantite": 1,
      "image": "🍝"
    }
  ],
  "total": 245,
  "date": "2026-02-15T12:30:00.000Z"
}
```

---

## Après avoir créé vos ressources

1. Copiez l'URL de votre endpoint (par exemple : `https://65a1234567890.mockapi.io/api`)

2. Ouvrez le fichier `src/services/api.js`

3. Remplacez cette ligne :
```javascript
const API_URL = 'https://65a1234567890.mockapi.io/api';
```
par votre propre URL.

4. Sauvegardez et relancez l'application !

---

## Fonctionnalités de l'API

Une fois configuré, votre application pourra :
- ✅ Récupérer la liste des plats depuis MockAPI
- ✅ Ajouter de nouvelles réservations
- ✅ Enregistrer les commandes
- ✅ Modifier et supprimer des éléments

---

## Note importante

Sans configuration MockAPI, l'application fonctionne quand même avec des données par défaut codées en dur. MockAPI est optionnel mais recommandé pour tester les fonctionnalités complètes de l'API.
