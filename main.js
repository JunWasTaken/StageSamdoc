const express = require('express');
const fs = require('fs');
const test_fs = require('./test_fs');
const app = express();
const port = 9090;

var array_dossier = fs.readdirSync("./");

app.get('/', (req, res)=>{
    //test_fs.affichage_contenu_dossier(array_dossier, res);
    array_dossier.forEach(file =>{
        if (fs.lstatSync(`./${file}/`).isDirectory()){
            console.log(file);
            //ouverture de la div principale 
            res.write(`<div id=${file}>${file}`);
            //création du tableau secondaire contenant les sous-répertoires
            array_tmp = fs.readdirSync(`./${file}/`);
            //ouverture de la div secondaire
            res.write(`<div style="margin-left:5%">`);
            array_tmp.forEach(file =>{
                console.log('\t'+file);
                res.write(`<div style="color:green" id=${file}>${file}</div>`);    
            })
            //fermeture de la div principale
            res.write(`</div>`);
            res.write(`</div>`);
        }else{
            console.log(file);
            res.write(`<div id="${file}">${file}</div>`, encoding='utf-8');
        }
    })
});

app.listen(port, () =>{
    console.log(`Actuellement en écoute sur le port ${port}`);
});