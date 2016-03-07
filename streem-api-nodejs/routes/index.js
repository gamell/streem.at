'use strict';

const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');

// configure router to use bodyParser()
// this will let us get the data from a POST
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// middleware to use for all requests
router.use((req, res, next) => {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api! 2222' });
});

router.use('/events', require('./events'));

module.exports = router;
