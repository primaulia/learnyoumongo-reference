var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
var age = process.argv[2];

mongo.connect(url, function(err, db) {
  if(err) throw err;

  // db gives access to the database
  var parrots = db.collection('parrots');

  // console.log('age is', typeof age);

  parrots.find({
          age: {
            $gt: parseInt(age)
          }
         })
         .toArray(function(err, doc) {
          if(err) throw err;
          // console.log('age is', age)
          console.log(doc);
          db.close();
         });
});
