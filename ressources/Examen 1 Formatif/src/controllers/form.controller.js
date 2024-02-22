// À ajuster selon la structure
const { response } = require("express");
const Form = require("../models/form.model.js");

exports.pageTitre = (req, res) => {
    /* Vérifier les paramètres */
    var type = req.params.type;
    var page = req.query.page;
    page = parseInt(page);
    if(!Number.isInteger(page) || page < 0){
        return res.status(409).json({"message":"Page invalide"});
    }
    if(page == undefined){
        page = 1;
    }
    /* Si les deux types sont spécifiés, on retourne une erreur */
    Form.pageTitre(type, page)
    .then((form) => {
        //Si on a aucun résultat
        if(!form[0]) {
            res.status(404);
            res.send({
                message: `Aucun Pokémon trouvé avec le type ${type}`
            });
            return;
        }
        /* Code réutilisé de "Pokémon API" */
        res.status(200);

        /* Paramètres */
        const qtPage = 10;
        const debut = (page - 1) * qtPage;
        const fin = debut + qtPage;
        const nbFilms = form.length;
        const nbPage = Math.ceil(nbFilms / 10);
        var prochaine_page = page + 1;
        if(prochaine_page > nbPage ? prochaine_page = 'null' : prochaine_page = prochaine_page);
        /* Format */
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            titre: form.slice(debut, fin),
            filtre: type,
            resultats : nbFilms,
            page : page,
            url_page_suivante: "/api/titres/"+type+"?page"+prochaine_page
        }));
    })
    // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car c'est du serveur que provient l'erreur.
    .catch((erreur) => {
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: `Échec lors de la récupération des films/séries avec le type ${type}`
        });
    });
};
