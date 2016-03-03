var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  fileName: String,
  eventId: String,
});

module.exports = mongoose.model('Picture', eventSchema);
