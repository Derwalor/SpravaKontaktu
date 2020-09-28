const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const vypis = require("./find");
const novy = require("./new");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => { // vypis databaze
  vypis(function (asdf){
    res.send(asdf);
  });    
});


app.post('/',bodyParser.json(), (req, res) => { //vložení kontaktu
    novy(req.body, function (req, res){ 
    console.log("Záznam byl přidán.");
    });
});


app.listen(3000, () => console.log('Listening on port 3000...'));
