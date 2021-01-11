const express = require('express');
const serveIndex = require('serve-index');
const app = express();

app.use(express.static('public'));
app.use('/test', express.static('public/test'), serveIndex('public/test', { 'icons': true }))
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.listen(9091);