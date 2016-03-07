'use strict';

const throng = require('throng');

// CONST

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 8080;

// Entry point for every worker

function start() {
  // call the packages we need
  const express = require('express'); // call express
  const app = express(); // define our app using express

    // mount all the routes
  app.use('/v1', require('./routes'));

  // expose uploaded pictures
  app.use('/event-pictures', express.static(`${__dirname}/uploads/event-pictures/original`));

  // connect to DB
  // TODO: Switch by environment
  const mongoose = require('mongoose');
  mongoose.connect('localhost:27017/streemat'); // connect to our database
  // mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

  // START THE SERVER
  // =============================================================================
  app.listen(PORT);
  console.log(`Magic happens on port ${PORT}`);
}

// Concurrency config

throng(start, {
  workers: WORKERS,
  lifetime: Infinity,
});
