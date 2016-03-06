// All routes will be mounted under /events/

const express = require('express');
const router = new express.Router();

// Models
const Event = require('../models/event');

// we nest the pictures routes as middleware all pictures routes will be under /events/:eventId/p/
router.use('/:eventName/p', require('./pictures'));

/**
* @api {post} /events Creates a new event
* @apiName createEvent
* @apiGroup Events
*
* @apiParam {String} eventName Desired Event name
* @apiParam {String} [location] Optional Event location
* @apiParam {String} [permissions] Optional Event permissions
*
* @apiSuccess {String} name The eventId
* @apiSuccessExample Example data on success:
* {
*  "eventId": "wedding-joan-kristin"
* }
*/

router.route('/').post((req, res) => {
  const event = new Event();
  event.name = req.body.name;

  event.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Event created!' });
  });
});

/**
* @api {get} /events/ Lists all the events you are authorized to see
* @apiName getEvents
* @apiGroup Events
*
* @apiParam {String} eventId Desired Event name
*
* @apiSuccess {Array} events Events array containing information about the events
* @apiSuccessExample Example data on success:
* {
*   events: [{
*         "eventId": "wedding-joan-kristin",
*         "name": "Wedding Joan & Kristin",
*         "location": "1.34355,0.32763"
*       },{
*         "eventId": "wedding-joan-kristin",
*         "name": "Wedding Joan & Kristin",
*         "location": "1.34355,0.32763"
*       }]
* }
*/

router.route('/').get((req, res) => {
  Event.find().then((err, events) => {
    if (err) {
      res.send(err);
    }
    res.json(events);
  });
});

/**
* @api {get} /events/:eventId Shows the information for an event
* @apiName getEvent
* @apiGroup Events
*
* @apiParam {String} eventId Event Id
*
* @apiSuccess {Object} event Object containing the information of the event
* @apiSuccessExample Example data on success:
* {
*  "eventId": "wedding-joan-kristin",
*  "name": "Wedding Joan & Kristin",
*  "location": "1.34355,0.32763"
* }
*/

router.route('/:eventName').get(function(req, res) {
            Event.findById(req.params.eventId, function(err, event) {
                if (err)
                    res.send(err);
                res.json(event);
            });
        });

router.route('/:eventName').post(function(req, res) {
    Event.findById(req.params.eventId, function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
});

module.exports = router;
