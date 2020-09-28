const MongoClient = require('mongodb').MongoClient;

 function uprav(zakaznik, callback) {
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
                var myquery = { address: "Valley 345" };
                var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
                dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                  console.log("1 document updated");
                  db.close();
                });
              });
                */


    });
     
  });
}
module.exports = uprav;