const fs = require('fs');
var path = './';

module.exports = {
    affichage_contenu_dossier : function(array_dossier, res, path){
        affichage_dossier(array_dossier, res, path);
    }
}

function affichage_dossier(array_dossier, res, path){
    array_dossier.forEach(file =>{
        var path_tmp = path+file+'/'
        console.log(file)
        if (fs.lstatSync(path_tmp).isDirectory()){
            //ouverture de la div principale 
            res.write(`<div id=${file} onclick="reveal('${file}_rep');">${file}`);
            //création du tableau secondaire contenant les sous-répertoires
            array_tmp = fs.readdirSync(path_tmp);
            //ouverture de la div secondaire
            res.write(`<div style="margin-left: 5%;" id="${file}_rep">`);
            array_tmp.forEach(file =>{
                try{
                    //appel récursif de la fonction pour afficher les sous-dossiers
                    affichage_dossier(array_tmp, res, path_tmp);
                }catch(error){
                    //on affiche les fichiers problématiques en rouge, souvent lié à un fichier sans extension que le système considère comme des répertoires sans qu'il n'en soit
                    console.log(file);
                }
            })
            //fermeture de la div secondaire
            res.write(`</div>`);
            //fermeture de la div principale
            res.write(`</div>`);
        }else{
            //affichage dans le cas où il s'agit d'un fichier simple
            console.log(file);
            res.write(`<div id="${file}_content">${file}</div>`, encoding='utf-8');
        }
    })
}