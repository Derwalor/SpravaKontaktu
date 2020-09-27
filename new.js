const MongoClient = require('mongodb').MongoClient;

 function novy(text , zakaznik, callback) {
    MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) throw err;
        console.log(zakaznik);

       db = MongoClient.db("Kontakty");
       db.collection("Zakaznici", function (err, collection) {
                 console.log("chyba kolekce");
                  if (err) throw err;
                  console.log("po chybě kolekce");
                collection.insertOne(zakaznik, function (err, req, res) {
                  console.log("chyba vložení");
                  if (err) throw err;
                console.log("prošlo to přes err");
                console.log(req);
                MongoClient.close();
                callback(text, zakaznik);
              });
        
    });
     
  });
}
module.exports = novy;