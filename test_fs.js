const fs = require('fs');
var path = './';
var return_array = new Array();

module.exports = {
    affichage_contenu_dossier : function(array_dossier, path){
        return affichage_dossier(array_dossier, path);
    }
}

function affichage_dossier(array_dossier, path){
    array_dossier.forEach(file =>{
        var path_tmp = path+file+'/'
        if (fs.lstatSync(path_tmp).isDirectory()){
            //ouverture de la div principale 
            return_array.push(`
            <div class="card, ml-5">
            <img src="/test/images/folder.png" class="card-img-top" alt="logo dossier"> 
            <div class="card-body">
            <div id=${file} class="card-text" onclick="reveal('${file}_rep');">${file}`)
            //création du tableau secondaire contenant les sous-répertoires
            array_tmp = fs.readdirSync(path_tmp);
            //ouverture de la div secondaire
            return_array.push(`<div style="display:none" id="${file}_rep">`)
            array_tmp.forEach(file =>{
                try{
                    //appel récursif de la fonction pour afficher les sous-dossiers
                    affichage_dossier(array_tmp, path_tmp);
                }catch(error){
                    //le programme retourne une erreur pour les fichiers sans extensions car il les considère comme des dossiers.
                }
            })
            //fermeture de la div secondaire
                return_array.push(`</div>`);
            //fermeture de la div principale
                return_array.push(`</div></div></div>`);
        }else{
            //affichage dans le cas où il s'agit d'un fichier simple
            return_array.push(`
            <div class="card, ml-5"
            <img src="/test/images/document.png" class="card-img-top" alt="logo fichier">
            <div class="card-body">
            <div id="${file}_content">${file}</div>
            </div>
            </div>`);
        }
    })
    return return_array;
}