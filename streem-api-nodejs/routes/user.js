'use strict';

// All routes will be mounted under /user/

const express = require('express');
const eventUtils = require('../services/event-utils');
const router = new express.Router();

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
* @apiSuccess {String} name The eventId
* @apiSuccessExample Example data on success:
* {
*  "eventId": "wedding-joan-kristin"
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
});

module.exports = router;
