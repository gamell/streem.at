var express = require('express'),
    app = express(),
    router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api! 2222' });
});

router.use('/events', require('./events'));

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /v1
// NOT WORKING
app.use('/v1', router);

module.exports = router;


// TODO:
/*

- Fix routes
- NPM script by environment
- install supervisor locally and include in package.json / npm START

*/
