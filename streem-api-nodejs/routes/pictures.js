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
    cb(null, './uploads/event-pictures/original/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname} - ${Date.now()}`);
  },
});

const upload = multer({
  storage,
  // dest: './uploads/event-pictures/original/', //path relative to server.js dir
  limits: { fileSize: 10000000, files: 1 },
});

router.route('/').post(upload.single('picture'), (req, res) => {
  // pictureService.postUpload(req, res, next);
});
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
