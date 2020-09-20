const mongo = require('mongodb');



mongoose.connect('mongodb://localhost:27017/Kontakty', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.error('Could not connect to MongoDB... ', error));
