const express = require('express');
const fs = require('fs');
const test_fs = require('./test_fs');
const app = express();
const port = 9090;

var array_dossier = fs.readdirSync("./");

app.get('/', (req, res)=>{
    test_fs.affichage_contenu_dossier(array_dossier, res);
    array_dossier.forEach(file =>{
        if (fs.lstatSync(`./${file}/`).isDirectory()){
            res.write(`<div id=${file}>${file}`)
            console.log(fs.readdirSync(`./${file}/`));
        }else
            console.log(file);
        res.write(`<div href="./${file}">${file}</div>`, encoding='utf-8');
    })
    //res.write(`<div href="./${file}">${file}</div>`, encoding='utf-8');
});

app.listen(port, () =>{
    console.log(`Actuellement en écoute sur le port ${port}`);
});