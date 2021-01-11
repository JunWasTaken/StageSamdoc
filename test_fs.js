const express = require('express');
const fs = require('fs');
const app = express();
const port = 9090;

var array_dossier = fs.readdirSync("./");
array_dossier.forEach(file =>{
    console.log(file);
})

app.get('/', (req, res)=>{
    array_dossier.forEach(file =>{
        res.write(`<a href="./${file}">${file}</a><br>`, encoding='utf-8');
    })
});

array_dossier.forEach(file =>{
    app.get(`/${file}`, (req, res)=>{
        array_dossier.forEach(file =>{
            res.write(`<a href="./${file}">${file}</a><br>`, encoding='utf-8');
        })
    })
})

app.listen(port, () =>{
    console.log(`Actuellement en écoute sur le port ${port}`);
});