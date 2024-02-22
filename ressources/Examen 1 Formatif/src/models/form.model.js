// À ajuster selon la structure
const bcrypt = require('bcrypt');
const costFactor = 10;
const sql = require("../config/db.js");
let mdp = "";
/* Classe usager */
const Form = (form) => {
    this.id = Form.id;
    this.type = Form.type;
    this.titre = Form.titre;
};

Form.pageTitre = (type, page) => {
    return new Promise((resolve, reject) => {
        if(type == 'serie' ? type = 'TV Show' : type = 'Movie');
        /* Requêtes */
        var requete = 'SELECT title, show_id FROM netflix_titles WHERE show_type = ?';
        const params = [type];

        /* Réponse */
        sql.query(requete, params, (erreur, resultat) => {
            if(erreur) {
                reject(erreur);
            } else {
                resolve(resultat);
            }
        })
    })
}
module.exports = Form;