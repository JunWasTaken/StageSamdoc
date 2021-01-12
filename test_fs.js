const fs = require('fs');

module.exports = {
    affichage_contenu_dossier : function(array_dossier, res){
        affichage_dossier(array_dossier, res);
    }
}

function affichage_dossier(array_dossier, res){
    array_dossier.forEach(file =>{
        if (fs.lstatSync(`./${file}/`).isDirectory()){
            console.log(file);
            //ouverture de la div principale 
            res.write(`<div id=${file} onclick="reveal('${file}_content');">${file}`);
            //création du tableau secondaire contenant les sous-répertoires
            array_tmp = fs.readdirSync(`./${file}/`);
            //ouverture de la div secondaire
            res.write(`<div style="margin-left: 5%;" id="${file}_content">`);
            array_tmp.forEach(file =>{
                console.log('\t'+file);
                res.write(`<div style="color:green" id=${file}>${file}</div>`);    
            })
            //fermeture de la div secondaire
            res.write(`</div>`);
            //fermeture de la div principale
            res.write(`</div>`);
        }else{
            console.log(file);
            res.write(`<div id="${file}">${file}</div>`, encoding='utf-8');
        }
    })
}