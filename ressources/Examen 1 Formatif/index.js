const express = require('express');
const routes = require('./src/routes/form.route.js');
const dotenv = require("dotenv");
const PORT = process.env.PORT || 6969
dotenv.config();
const app = express();

/* Permettre l'écriture JS -> JSON et JSON -> JS */
app.use(express.json());

/* On se dirige vers le fichier usager.route.js */
app.use('/api/titres', routes);

/* On démarre le serveur */
app.listen(PORT, () => {
    console.log('Le serveur est en écoute sur le port ' + PORT);
});
