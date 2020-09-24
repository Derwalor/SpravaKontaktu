const express = require('express');
const app = express();
const vypis = require("./find");
const novy = require("./new");
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => { // vypis databaze
  vypis(function (asdf){
    res.send(asdf);
  });    
});


app.post('/', (req, res) => {
  console.log("začátek appky");
  //console.log(JSON.stringify(req.body, undefined, 4));
  novy(function (pridat){
    console.log("začátek funkce");
    //console.log(JSON.stringify(req.body, undefined, 4));
    //res.send(pridat);
  });
});


app.listen(3000, () => console.log('Listening on port 3000...'));
