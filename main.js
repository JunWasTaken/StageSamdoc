const express = require('express');
const fs = require('fs');
const test_fs = require('./test_fs');
const app = express();
const port = 9090;
var array = new Array();

var array_dossier = fs.readdirSync("./");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res)=>{
    // on affecte le résultat de affichage_contenu_dossier dans le tableau array qui sera utilisé après 
    array.push(test_fs.affichage_contenu_dossier(array_dossier, "./"));
    res.render('./main.ejs', {
        div:array
    });
    console.log('page racine affichée')
});

app.listen(port, () =>{
    console.log(`Actuellement en écoute sur le port ${port}`);
});