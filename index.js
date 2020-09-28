const express = require('express');
const app = express();
const vypis = require("./find");
const novy = require("./new");
const smaz = require("./delete");
const uprav = require("./update");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => { // vypis databaze
  vypis(function (asdf){
    res.send(asdf);
  });    
});


app.post('/',bodyParser.json(), (req, res) => { //vložení kontaktu
    novy(req.body, function (req, res){ 
    res.send("Záznam byl přidán.");
    });
});

app.delete('/',bodyParser.json(), (req, res) => {
  console.log(JSON.stringify(req.body, undefined, 4)); //kontrola obsahu postmana
  smaz(req.body, function (req, res){
  res.send("Záznam byl smazán.");
  });
});

app.update('/',bodyParser.json(), (req, res) => {
  console.log(JSON.stringify(req.body, undefined, 4)); //kontrola obsahu postmana
  uprav(req.body, function (req, res){
  res.send("Záznam byl změněn.");
  });
});


app.listen(3000, () => console.log('Listening on port 3000...'));
