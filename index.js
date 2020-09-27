const express = require('express');
const app = express();
const vypis = require("./find");
const novy = require("./new");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => { // vypis databaze
  vypis(function (asdf){
    res.send(asdf);
  });    
});


app.post('/',bodyParser.json(), (req, res) => {
    //console.log(JSON.stringify(req.body, undefined, 4)); kontrola obsahu postmana
    novy(req.body, function (req, res){
    console.log("Dokument byl přidán.");
    });
});


app.listen(3000, () => console.log('Listening on port 3000...'));
