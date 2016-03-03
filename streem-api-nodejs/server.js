'use strict';

var throng = require('throng');

// CONST

const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 8080;

// Concurrency config

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

// Entry point for every worker

function start(){

    // call the packages we need
    var express    = require('express');        // call express
    var app        = express();                 // define our app using express
    var bodyParser = require('body-parser');

    // mount all the routes
    app.use('/v1', require('./routes'));

    // expose uploaded pictures
    app.use('/event-pictures', express.static(__dirname + '/uploads/event-pictures/original'));

    //connect to DB
    // TODO: Switch by environment
    var mongoose   = require('mongoose');
    mongoose.connect('localhost:27017/streemat'); // connect to our database
    //mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    // START THE SERVER
    // =============================================================================
    app.listen(PORT);
    console.log('Magic happens on port ' + PORT);

}
