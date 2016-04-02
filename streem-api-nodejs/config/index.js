'use strict';

// return [development].json
module.exports = require(`./${(process.env.NODE_ENV || 'development')}.json`);
