const express = require('express');
const app = express();
const vypis = require("./find");
app.use(cors());

app.get('/', (req, res) => {
  vypis(function (asdf){
    res.send(asdf);
    });
    
});

app.listen(3000, () => console.log('Listening on port 3000...'));
