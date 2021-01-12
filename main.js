const express = require('express');
const fs = require('fs');
const test_fs = require('./test_fs');
const app = express();
const port = 9090;

var array_dossier = fs.readdirSync("./");

function reveal(id){
    element = document.getElementById(id);

    if (window.getComputedStyle(element).visibility == "collapse")
        element.style.visibility = "visible";
    else
        element.style.visibility = "collapse";
}

app.get('/', (req, res)=>{
    test_fs.affichage_contenu_dossier(array_dossier, res, "./");
    /*array_dossier.forEach(file =>{
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
    })*/
});

app.listen(port, () =>{
    console.log(`Actuellement en écoute sur le port ${port}`);
});