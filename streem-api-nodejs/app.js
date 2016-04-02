'use strict';

const express = require('express'); // call express

const app = express();
// mount all the routes
app.use('/v1', require('./routes'));
// expose uploaded pictures
app.use('/event-pictures', express.static(`${__dirname}/uploads/event-pictures/original`));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {},
  });
});

module.exports = app;
