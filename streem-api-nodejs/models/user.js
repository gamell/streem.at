// 'use strict';
//
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const validator = require('validator');
// const customValidator = require('../services/custom-validator');
//
//
// const eventSchema = new Schema({
//   username: {
//     type: String,
//     required: [true, 'username is required'],
//     validate: {
//       validator: (value) => customValidator.noSpaces(value),
//       message: 'Username must not be empty and must not contain spaces',
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (value) => validator.isEmail(value),
//       message: 'Email is incorrect',
//     },
//   },
//   avatarUrl: String,
// });
//
// module.exports = mongoose.model('User', eventSchema);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};
