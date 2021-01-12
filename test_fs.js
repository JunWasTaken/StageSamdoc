const fs = require('fs');

module.exports = {
    affichage_contenu_dossier : function(array_dossier){
        array_dossier.forEach(file =>{
            if (fs.lstatSync(`./${file}/`).isDirectory())
                affichage_dossier(fs.readdirSync(`./${file}/`));
            else
                console.log(file);
        })
    }
}

function affichage_dossier(array_dossier){
    array_dossier.forEach(file =>{
        if (fs.lstatSync(`./${file}/`).isDirectory())
            affichage_dossier(fs.readdirSync(`./${file}/`));
        else
            console.log(file);
    })
}