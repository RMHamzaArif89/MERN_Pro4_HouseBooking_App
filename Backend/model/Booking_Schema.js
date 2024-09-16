// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Houses', // Refers to the 'Houses' collection
    required: true
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
