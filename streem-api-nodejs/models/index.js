'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../config').db; // environment will be selected automatically
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
let db = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.js') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// extend db object with the sequelize and Sequelize properties
db = Object.assign(db, { sequelize, Sequelize });

module.exports = db;
