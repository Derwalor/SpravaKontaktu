const MongoClient = require('mongodb').MongoClient;

 function novy(callback) {
    MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) throw err;

     db = MongoClient.db("Kontakty")
     db.collection("Zakaznici", function (err, collection){
            collection.insertOne().toArray(function(err, res) {
            if(err) throw err;    
            console.log(items);
            //db.close(); 
            callback(items);
        });
        
    });
     
  });
}
module.exports = novy;