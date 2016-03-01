var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  userId: String,
  content: String,
});

module.exports = mongoose.model('Comment', eventSchema);
