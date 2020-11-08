const express = require('express')
const router = express.Router()
const Tags = require('../models/tags')


//To Create a new post
router.post("/newTag", (req, res) => {
 
  //console.log(req.body);
  const post = new Tags({
    name : req.body.name
  });
  post
    .save()
    .then((resp) => res.status(201).json(resp))
    .catch((err) => res.status(400).json(err));
});

//To list all topics
router.get("/fetchAllTags", (req, res) => {
  
Tags.find({}, function (err, tags) {
    if (err) return handleError(err);
    var topicMap = {};

    /* topics.forEach(function(topic) {
      topicMap[topic._id] = topic;
    }); */
    res.send(tags); 
    
  });
});

module.exports = router;