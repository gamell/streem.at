'use strict';

// All pictures routes will be under /events/:eventId/p/

const express = require('express');
// const pictureService = require('../services/pictureService');
const multer = require('multer');
const router = new express.Router({ mergeParams: true }); // we merge params from parent

// Models
const Picture = require('../models/picture');

// setup multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/event-pictures/full-size/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

const upload = multer({
  storage,
  // dest: './uploads/event-pictures/original/', //path relative to server.js dir
  limits: { fileSize: 10000000, files: 1 },
});

/**
* @api {post} /events/:eventId/pictures Uploads a new picture to an event
* @apiName addPicture
* @apiGroup Pictures
*
* @apiParam {String} caption Picture caption
*
* @apiSuccess {Object} picture The picture object
* @apiSuccessExample Example data on success:
* {
*  "caption": "wedding-joan-kristin",
   "fullSizeUrl": "...",
   "thumbnailUrl": "..."
* }
*/

router.route('/').post(upload.single('picture'), (req, res) => {
  // pictureService.postUpload(req, res, next);
});

/**
* @api {get} /events/:eventId/pictures Gets a list of all the pictures of the event
* @apiName listPictures
* @apiGroup Pictures
*
* @apiParam {String} eventId Event Id
*
* @apiSuccess {Array} pictures An array with the picture objects
* @apiSuccessExample Example data on success:
* [{
*  "author": {
*
*  },
*  "caption": "wedding-joan-kristin",
*   "urls": {
*     "fullSize": "..."",
*   },
* }]
*/

router.route('/').get((req, res) => {
  Picture.find().then((err, events) => {
    if (err) {
      res.send(err);
    } else {
      res.json(events);
    }
  });
});

router.route('/:pictureId').get((req, res) => {
  // ...
});
router.route('/:pictureId').put((req, res) => {
  // ...
});

module.exports = router;
