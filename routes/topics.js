const express = require('express')
const router = express.Router()
const Topics = require('../models/topics')


//To Create a new post
router.post("/newTopic", (req, res) => {
  //console.log(req.body.name);
  //res.send('Here');
  //console.log("req: "+ JSON.stringify(req, null, 3));
  //const { name } = req.body.name;
  const post = new Topics({
    name : req.body.name
  });
  post
    .save()
    .then((resp) => res.status(201).json(resp))
    .catch((err) => res.status(400).json(err));
});

// Create and Save a new Tutorial



//To list all topics
router.get("/fetchAllTopics", (req, res) => {
  

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
