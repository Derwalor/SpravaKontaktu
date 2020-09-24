const MongoClient = require('mongodb').MongoClient;

 function novy(callback) {
    MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) throw err;

     db = MongoClient.db("Kontakty")
     db.collection("Zakaznici", function (err, collection){
            console.log("spusteni kolekce");
            collection.insertOne(function(err, req, res) {
            if(err) throw err;    
            console.log(JSON.stringify(req.body, undefined, 4));
            console.log("prošlo to přes err");
            db.close(); 
            //callback(items);
        });
        
    });
     
  });
}
module.exports = novy;