# Timestamp Microservice (freeCodeCamp)

Projet FCC: recreer le microservice d horodatage <https://timestamp-microservice.freecodecamp.rocks>.

## Objectif de l exercice
- `GET /api/` retourne la date/heure courante sous `{ unix, utc }`.
- `GET /api/:date?` accepte soit une date ISO, soit un timestamp millisecondes et renvoie `{ unix, utc }` ou `{ error: "Invalid Date" }`.
- Pas de conversion de fuseau horaire : on utilise `new Date()` (GMT).

## Implementation en cours
- Serveur Express en ES modules (`index.js`) avec CORS active.
- Router separe (`routes/route.js`) pour les endpoints.
- `GET /` sert `views/index.html` (CSS attendu dans `public/`).
- `GET /api/hello` renvoie `{ greeting: "hello API" }`.
- `GET /api/:time` renvoie `{ unix, utc }` mais la logique est encore a corriger.

## Ecarts restants avec l enonce
- Pas de `GET /api/` (sans parametre) pour l heure courante.
- Les dates invalides devraient renvoyer `{ "error": "Invalid Date" }` (pas fait).
- `/api/:time` doit distinguer timestamp millisecondes vs date ISO, ne pas melanger secondes/ms, et ne pas renvoyer de valeur `unix` en dur.
- `Date.parse` renvoie `0` pour `1970-01-01` (cas valide a traiter).
- `express.static('/public')` doit etre `express.static('public')` pour servir les assets.

## Comment lancer
- Installer les dependances : `npm install`.
- Demarrer : `npm start` (PORT=3000 par defaut, ou `PORT` defini).
- Ouvrir `http://localhost:3000/`.

## Plan pour finaliser
- Ajouter `GET /api/` qui renvoie `{ unix: Date.now(), utc: new Date().toUTCString() }`.
- Refaire `/api/:time` : si `time` est numerique, le traiter comme millisecondes, sinon passer la chaine a `new Date(time)`; si `isNaN(date.getTime())`, renvoyer `{ error: "Invalid Date" }`, sinon `{ unix: date.getTime(), utc: date.toUTCString() }`.
- Corriger `express.static` pour servir le dossier `public/`.
- Tester manuellement `/api/2015-12-25`, `/api/1451001600000`, `/api/foobar`, et `/api/`.
