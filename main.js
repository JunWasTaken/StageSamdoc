const express = require('express');
const fs = require('fs');
const test_fs = require('./test_fs');
const app = express();
const port = 9090;
var array = new Array();

var array_dossier = fs.readdirSync("./");
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    array.push(test_fs.affichage_contenu_dossier(array_dossier, res, "./"));
    //console.log(array);
    res.render('./main.ejs', {
        div:array
    });
    //test_fs.affichage_contenu_dossier(array_dossier, res, "./");
});

app.listen(port, () =>{
    console.log(`Actuellement en écoute sur le port ${port}`);
});