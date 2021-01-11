const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) =>{
    res.send("Hello World");
})

/**
 * req.path permet d'afficher le path actuel du fichier 
 */
app.get('/about', (req, res) =>{
    res.send(req.path);
})

app.get('/test.txt', (req, res) =>{
    res.send("test.txt");
})

app.listen(port, ()=>{
    console.log(`Example app listening at port:${port}`);
})