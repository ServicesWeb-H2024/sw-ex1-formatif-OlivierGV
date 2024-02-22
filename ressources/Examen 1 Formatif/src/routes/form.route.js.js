const express = require('express');
const router = express.Router();
// À ajuster selon la structure
//const authentification = require('../middlewares/form.middleware');
const titreController = require('../controllers/form.controller');

/* Lister les films OU séries */
router.get('/:type', (req, res) => {
    const type = req.params.type
    // Vérifier si le type est "film" ou "serie"
    if (type === 'film' || type === 'serie') {
        titreController.pageTitre(req, res);
    } else {
        return;
    }
});

/* Exporter toutes les méthodes qui utilise "router" */
module.exports = router;
