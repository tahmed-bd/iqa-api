const express = require('express')
const router = express.Router()
const IQA = require('../models/iqas')


//To Create a new post
router.post("/newQA", (req, res) => {
  console.log(req.body);
  console.log(req.body.tags);
  
  /* req.body.tag.forEach(function(eachObj){
    var obj = {
        "description": eachObj.description,
        "value": eachObj.value,
        "percentage": eachObj.percentage
    }
    expArr.push(obj);
  }); */
/*   req.body.tags.forEach(function(eachObj){

        console.log("Tags: " + eachObj);
        expArr.push(eachObj);
    });  */

  // throw new Error('BROKEN');
  //res.send('respond with a resource');
  //res.send('Here');
  //console.log("req: "+ JSON.stringify(req, null, 3));
  //const { name } = req.body.name;
  const post = new IQA({
    question : req.body.question,
    answer   : req.body.answer,
    reference : req.body.reference,
    topic : req.body.topic,
    tags : req.body.tags
  });
  post
    .save()
    .then((resp) => res.status(201).json(resp))
    .catch((err) => res.status(400).json(err)); 
});

// Create and Save a new Tutorial



//To list all topics
router.get("/fetchAllQA", (req, res) => {
  

  // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
  IQA.find({}, function (err, iqa) {
    if (err) return handleError(err);
    var topicMap = {};

    /* topics.forEach(function(topic) {
      topicMap[topic._id] = topic;
    }); */
    res.send(iqa); 
    
  });
});

//To list all topics
router.get("/fetchQAByTopic", (req, res) => {
  

    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
  Topics.find({}, function (err, topics) {
      if (err) return handleError(err);
      var topicMap = {};
  
      /* topics.forEach(function(topic) {
        topicMap[topic._id] = topic;
      }); */
      res.send(topics); 
      
    });
  });

  //To list all topics
router.get("/fetchQAByTag", (req, res) => {
  

    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
  Topics.find({}, function (err, topics) {
      if (err) return handleError(err);
      var topicMap = {};
  
      /* topics.forEach(function(topic) {
        topicMap[topic._id] = topic;
      }); */
      res.send(topics); 
      
    });
  });

module.exports = router;