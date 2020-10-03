const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const delCust = require("./delete");
const custList = require("./find");
const newCust = require("./new");

app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => { // vypis databaze
  custList(function (err, cList){
    if (err) res.status(500).send(err)
    else res.send(cList);

  });
});


app.post('/',bodyParser.json(), (req, res) => { //vložení kontaktu
    newCust(req.body, function (err, nCust){
      if (err) res.status(500).send(err)
      else res.send(nCust);
    
    });
});

app.delete('/',bodyParser.json(), (req, res) => { //smazání kontaktu
  delCust(req.body, function (err, dCust){
    if (err) res.status(500).send(err)
    else res.send(dCust);
  
  });
});



app.listen(3000, () => console.log('Listening on port 3000...'));
