'use strict';

// All routes will be mounted under /events/

let express = require('express'),
    router = express.Router();

// Models
let Event = require('../models/event');

// we nest the pictures routes as middleware all pictures routes will be under /events/:eventId/p/
router.use('/:eventId/p', require('./pictures'));

router.route('/')

    .post(function(req, res){
        let event = new Event();
        event.name = req.body.name;

        event.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message: 'Event created!' });
        });
    })

    .get(function(req, res) {
        Event.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    });

router.route('/:eventId')
        .get(function(req, res) {
            Event.findById(req.params.eventId, function(err, event) {
                if (err)
                    res.send(err);
                res.json(event);
            });
        })
        // upload pictures
        .post(function(req, res) {
            Event.findById(req.params.eventId, function(err, event) {
                if (err)
                    res.send(err);
                res.json(event);
            });
        });

module.exports = router;
