var express = require('express'),
    router = express.Router();

router.route('/events')

    .post(function(req, res){
        var event = new Event();
        event.name = req.body.name;

        event.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message: 'Event created!' });
        });
    })

    // get all the events (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Event.find(function(err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
    });

router.route('/events/:eventId')

        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
        .get(function(req, res) {
            Event.findById(req.params.eventId, function(err, event) {
                if (err)
                    res.send(err);
                res.json(event);
            });
        });

module.exports = router;
