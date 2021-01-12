const fs = require('fs');

module.exports = {
    affichage_contenu_dossier : function(array_dossier, res){
        affichage_dossier(array_dossier, res);
    }
}

function affichage_dossier(array_dossier, res){
    array_dossier.forEach(file =>{
        try{
            if (fs.lstatSync(`./${file}/`).isDirectory())
            affichage_dossier(fs.readdirSync(`./${file}/`));
        else
            res.write(file);
        }catch(error){

        }
    })
}