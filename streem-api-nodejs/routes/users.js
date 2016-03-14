'use strict';

// All routes will be mounted under /user/

const express = require('express');
const eventUtils = require('../services/event-utils');
const router = new express.Router();
const validator = require('validator');

// Models
const User = require('../models/user');

/**
* @api {post} /events Creates a new user
* @apiName createUser
* @apiGroup Users
*
* @apiParam {String} username Desired User name
* @apiParam {String} email Email
* @apiParam {String} password User password
*
* @apiSuccess {Object} user The user object
* @apiSuccessExample Example data on success:
* {
*  "username": "gamell"
*  "email": "gamell@gmail.com"
* }
*/

router.route('/').post((req, res) => {
  // TODO: detect that for the same user there is no event with the same name
  // const event = new Event();
  // event.readableName = req.body.name;
  // event.name = eventUtils.getEventName(event.readableName);
  // event.save((err) => {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.json({ event });
  // });
  const user = new User();
  //if(validator.isEmail(req.body.email) && validator.isAscii(req.body.username));
  user.uername = req.body.username;

});

module.exports = router;
