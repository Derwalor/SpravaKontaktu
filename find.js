const MongoClient = require('mongodb').MongoClient;

 function vypis(callback) {
MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) throw err;

     db = MongoClient.db("Kontakty")
     db.collection("Zakaznici", function (err, collection){
            collection.find().toArray(function(err, items) {
            if(err) throw err;    
            //console.log(items);
            MongoClient.close(); 
            callback(items);
        });
        
     });
     
});
}
module.exports = vypis;