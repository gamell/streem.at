'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  email: String,
  avatarUrl: String,
});

module.exports = mongoose.model('User', eventSchema);
