const MongoClient = require('mongodb').MongoClient;

 function smaz(zakaznik, callback) {
    MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) throw err;
        //console.log(zakaznik); kontrola funkčnosti routy

       db = MongoClient.db("Kontakty");
       db.collection("Zakaznici", function (err, collection) {
                if (err) throw err;
                collection.deleteOne(zakaznik, function (err, req, res) {
                if (err) throw err;
                console.log(zakaznik);
                MongoClient.close();
                callback(zakaznik);
              });  
    /*MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                var myquery = { address: 'Mountain 21' };
                dbo.collection("customers").deleteOne(myquery, function(err, obj) {
                  if (err) throw err;
                  console.log("1 document deleted");
                  db.close();
                });
              });*/


    });
     
  });
}
module.exports = smaz;
