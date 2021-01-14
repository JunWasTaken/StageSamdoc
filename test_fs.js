const fs = require('fs');
var path = './';
var return_array = new Array();

module.exports = {
    affichage_contenu_dossier : function(array_dossier, res, path){
        return affichage_dossier(array_dossier, res, path);
    }
}

function affichage_dossier(array_dossier, res, path){
    array_dossier.forEach(file =>{
        var path_tmp = path+file+'/'
        //console.log(file)
        if (fs.lstatSync(path_tmp).isDirectory()){
            //ouverture de la div principale 
                //res.write(`<div id=${file} onclick="reveal('${file}_rep');">${file}`);
            return_array.push(`
            <img src="../test/images/folder.png" class="card-img-top" alt="logo dossier"> 
            <div class="card-body">
            <div id=${file} class="ml-5, card-text" onclick="reveal('${file}_rep');">${file}`)
            //création du tableau secondaire contenant les sous-répertoires
            array_tmp = fs.readdirSync(path_tmp);
            //ouverture de la div secondaire
                //res.write(`<div style="margin-left: 5%;" id="${file}_rep">`);
            return_array.push(`<div style="margin-left: 5%; visibility: collapse, display:none" id="${file}_rep">`)
            array_tmp.forEach(file =>{
                try{
                    //appel récursif de la fonction pour afficher les sous-dossiers
                    affichage_dossier(array_tmp, res, path_tmp);
                }catch(error){
                    //le programme retourne une erreur pour les fichiers sans extensions car il les considère comme des dossiers.
                }
            })
            //fermeture de la div secondaire
                return_array.push(`</div>`);
            //fermeture de la div principale
                return_array.push(`</div></div>`);
        }else{
            //affichage dans le cas où il s'agit d'un fichier simple
            //console.log(file);
                //res.write(`<div id="${file}_content">${file}</div>`, encoding='utf-8');
            return_array.push(`<div id="${file}_content" class="ml-5">${file}</div>`)
        }
    })
    //console.log(return_array);
    return return_array;
}