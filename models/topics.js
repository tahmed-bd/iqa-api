const mongoose = require('mongoose')

const topicsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
topicsSchema.set('timestamps', true);

module.exports = mongoose.model('Topics', topicsSchema)
