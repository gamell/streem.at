'use strict';

// All routes will be mounted under /user/

const express = require('express');
const router = new express.Router();
const util = require('util');

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
  const user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ user });
    }
  });
});

module.exports = router;
