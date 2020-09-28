const MongoClient = require('mongodb').MongoClient;

 function novy(zakaznik, callback) {
    MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) throw err;
        
       db = MongoClient.db("Kontakty");
       db.collection("Zakaznici", function (err, collection) {
                if (err) throw err;
                collection.insertOne(zakaznik, function (err, req, res) {
                if (err) throw err;
                console.log(zakaznik);
                MongoClient.close();
                callback(zakaznik);
              });  

    });
     
  });
}
module.exports = novy;