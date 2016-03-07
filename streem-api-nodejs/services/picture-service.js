'use strict';

let express = require("express"),
    app = express(),
    util = require('util'),
    qt   = require('quickthumb');

// Use quickthumb
app.use(qt.static(__dirname + '/'));

module.exports.postUpload = function postUpload(req, res){

};
