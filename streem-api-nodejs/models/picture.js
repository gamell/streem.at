'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  urls: {
    fullSize: String,
    // TODO: Maybe generate more file sizes
  },
  caption: String,
  eventId: String,
  author: String, // userId form the author
});

module.exports = mongoose.model('Picture', eventSchema);
