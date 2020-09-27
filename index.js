const express = require('express');
const app = express();
const vypis = require("./find");
const novy = require("./new");
const cors = require('cors');
const bodyParser = require('body-parser');
var text = "test";

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => { // vypis databaze
  vypis(function (asdf){
    res.send(asdf);
  });    
});


app.post('/',bodyParser.json(), (req, res) => {
    console.log(JSON.stringify(req.body, undefined, 4));
    novy(text, req.body, function (req, res){
    console.log("návrat z funkce");
    console.log(text);
    });
});


app.listen(3000, () => console.log('Listening on port 3000...'));
