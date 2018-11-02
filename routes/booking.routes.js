const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');
const mongoose = require('mongoose');
router.get('/', function(_, res, next) {
  Booking.find(function (err, bookings) {
    if (err) return next (err);
    res.json(bookings);
  });
});

router.get('/:id', function(req, res, next) {
  Booking.findOne({ _id: req.params.id}, function (err, booking) {
    if (err) return next(err);
    res.json(booking);
  });
});

router.post('/', function(req, res, next) {
  Booking.create(req.body, function (err, booking) {
    if (err) return next (err);
    res.json(booking);
  });
});

router.put('/:id', function (req, res, next) {
  Booking.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, booking) {
    if (err) return next (err);
    res.json(booking);
  });
});

router.delete('/:id', function (req, res, next) {
  Booking.findOneAndRemove({ _id: req.param.id}, function (err, booking) {
    if (err) return next (err);
    res.json(booking);
  });
});

module.exports = router;

module.exports = router;
