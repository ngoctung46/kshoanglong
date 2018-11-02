const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  room: String,
  bookingDate: { type: Date, required: true }
}, { timestamp: true });
module.exports = mongoose.model('Booking', BookingSchema);
