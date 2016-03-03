'use strict';

// All pictures routes will be under /events/:eventId/p/

let express = require('express'),
      pictureService = require('../services/pictureService'),
      multer = require('multer'),
      router = express.Router({mergeParams: true}); // we merge params from parent

// Models
let Picture = require('../models/picture');

// setup multer
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'directory');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//   }
// });

var upload = multer({
  //storage: storage,
  dest: './uploads/event-pictures/original/', //path relative to server.js dir
  limits: {fileSize: 10000000, files: 1}
});

router.route('/')
    // upload a picture
    .post(upload.single('picture'), function(req, res, next){
        //pictureService.postUpload(req, res, next);
    })
    // list all pictures in event
    .get(function(req, res) {
        Picture.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    });

router.route('/:pictureId')
        // picture details
        .get(function(req, res) {
            //..
        })
        // change picture details (description, etc)
        .put(function(req, res) {
            //...
        });

module.exports = router;
