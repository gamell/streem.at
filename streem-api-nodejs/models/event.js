var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: String,
  permissions: String, // private / public / etc
  location: String,
  owner: String,
  additionalAdmins: String,
  streamingOn: Boolean,
  commentsOn: Boolean
});

module.exports = mongoose.model('Event', eventSchema);
