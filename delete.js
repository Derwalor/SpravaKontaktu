const MongoClient = require('mongodb').MongoClient;

 function delCust(delOne, callback) {
   MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) callback(err, undefined);
        else {db = MongoClient.db("Kontakty")
        db.collection("Zakaznici", function (err, collection){
            if (err) callback(err, undefined);
            else {
            collection.deleteOne(delOne)
               if (err) callback(err, undefined)
               else{
               console.log(delOne);
               MongoClient.close(); 
               callback(undefined, delOne);
            };
        }});
        
     }});
    
}

module.exports = delCust;