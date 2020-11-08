const mongoose = require('mongoose')

const topicsSchema = mongoose.Schema({
  question: {
    type: String,
    required: function ()
    {
        return this.field === undefined;
    }
  },
  answer:    [],
  reference: [],
  topic: {
    type: String,
    required: true
  },
  tags: {
    type:[String]
  }

});
topicsSchema.set('timestamps', true);

module.exports = mongoose.model('iqas', topicsSchema)
