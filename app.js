const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');
const bookingRoutes = require('./routes/booking.routes');
const app = express();
const config = require('./config/db.config')
// MIDDLE WARES
mongoose.connect(config.url, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() => console.log('Connection successful'))
  .catch((err) => console.error(err));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/bookings', bookingRoutes);

// delegate routing for angular
app.use('**', (_, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
// catch 404 and forward to error handler
app.use(function(_, _, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
