const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  readableName: String,
  name: String,
  permissions: String, // private / public / etc
  location: String,
  owner: String,
  additionalAdmins: String,
  streamingOn: Boolean,
  commentsOn: Boolean,
});

module.exports = mongoose.model('Event', eventSchema);
