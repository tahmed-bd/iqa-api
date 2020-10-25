var express = require('express');
var router = express.Router();
//Import the mongoose module


//Set up default mongoose connection



/* GET home page. */
router.get('/', function(req, res, next) {

    //var mongoDB = 'mongodb://localhost:27017/iqa_php_ref_sites';
    // mongoose.connect(mongoDB, { useNewUrlParser: true });
    //Get the default connection
    //var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    //db.on('error', console.error.bind(console, 'MongoDB connection error:'));


    //res.render('index', { title: 'Express' });
    // db.collection('iqa_php_ref_sites').find().toArray().then(results => {
    //     console.log(results)
    //   }).catch(error => console.error(error));

    res.render('index', { title: 'Express' });
});
//
// router.get('/topics', function(req, res, next) {
//
//   var mongoDB = 'mongodb://localhost:27017/iqa_php_ref_sites';
//   mongoose.connect(mongoDB, { useNewUrlParser: true });
//   /Get the default connection
//   var db = mongoose.connection;
//
//   //Bind connection to error event (to get notification of connection errors)
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
//
//   //res.render('index', { title: 'Express' });
//   db.collection('iqa_php_ref_sites').find().toArray().then(results => {
//       console.log(results)
//     })
//     .catch(error => console.error(error))
//
// });

module.exports = router;
