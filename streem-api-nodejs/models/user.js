var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('User', eventSchema);
