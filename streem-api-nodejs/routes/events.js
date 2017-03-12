'use strict';

// All routes will be mounted under /events/

const express = require('express');
const router = new express.Router();

// Models
const Event = require('../models').Event;

// we nest the pictures routes as middleware all pictures routes will be under /events/:eventId/p/
router.use('/:eventName/p', require('./pictures'));


/**
* @api {post} /events Creates a new event
* @apiName createEvent
* @apiGroup Events
*
* @apiParam {String} name Desired Event name
* @apiParam {String} [location] Optional Event location
* @apiParam {String} [permissions] Optional Event permissions
*
* @apiSuccess {Object} the event
* @apiSuccessExample Example data on success:
* {
*  "eventId": "wedding-joan-kristin"
* }
*/

router.route('/').post((req, res) => {
  // TODO: detect that for the same user there is no event with the same name
  const event = req.body;
  Event.create(event).then(ev => {
    res.json(ev);
  }).catch(e => res.send(e));
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
  Event.findAll().then(events => {
    res.json(events);
  }).catch(e => res.send(e));
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

router.route('/:name').get((req, res) => {
  Event.findOne({
    where: { urlName: req.params.name },
  }).then(ev => res.json(ev)).catch(e => res.send(e));
});

/**
* @api {put} /events/:eventId Edits the information of an event
* @apiName editEvent
* @apiGroup Events
*
* @apiParam {String} eventId Event Id
* @apiParam {String} [location] Optional Event location
* @apiParam {String} [permissions] Optional Event permissions
*
* @apiSuccess {Object} event Object containing the information of the event
* @apiSuccessExample Example data on success:
* {
*  "eventId": "wedding-joan-kristin",
*  "name": "Wedding Joan & Kristin",
*  "location": "1.34355,0.32763"
* }
*/

router.route('/:eventName').put((req, res) => {
  Event.findById(req.params.eventId, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
});

module.exports = router;
