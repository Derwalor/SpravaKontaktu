const MongoClient = require('mongodb').MongoClient;


 function newCust(customer, callback) {
    MongoClient.connect("mongodb://localhost:27017/Kontakty", function (err, MongoClient) {
        if(err) callback(err, undefined);
        else {
          db = MongoClient.db("Kontakty")
          db.collection("Zakaznici", function (err, custList) {
                if (err) callback(err, undefined);
                else {
                custList.insertOne(customer, function (err) {
                  if (err) callback(err, undefined);
                  else {
                  console.log(customer);
                  MongoClient.close();
                  callback(undefined, customer);
                }});  

          }});
  
 }});
}
module.exports = newCust;