const MongoClient = require('mongodb').MongoClient;

 function custList(callback) {
   MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) callback(err, undefined);
        else {db = MongoClient.db("Kontakty")
        db.collection("Zakaznici", function (err, collection){
            if (err) callback(err, undefined);
            else {
            collection.find().toArray(function(err, customers){
               if (err) callback(err, undefined)
               else{
               console.log(customers);
               MongoClient.close(); 
               callback(undefined, customers);
            }})
        }});
        
     }});
    
}

module.exports = custList;