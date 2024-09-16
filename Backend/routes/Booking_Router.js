// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../model/Booking_Schema');
const Houses = require('../model/Houses_Schema');

// POST request to create a booking and update unavailable dates in house
router.post('/bookHouse', async (req, res) => {
  try {
    const { name, email, DateRange, houseId } = req.body; // Assuming houseId is passed in the request
    const { startDate, endDate } = DateRange[0];
    
    // Calculate total price based on number of days
    const Difference_In_Time = new Date(endDate) - new Date(startDate);
    const totalDays = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    const totalPrice = totalDays * 100;

    // Create a booking
    const booking = new Booking({
      name,
      email,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalPrice,
      house: houseId,
    });

    await booking.save();

    // Update unavailable dates in the house schema
    const house = await Houses.findById(houseId);

    // Add the range of unavailable dates to the house's unavailableDate array
    const unavailableDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      unavailableDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Update the house's unavailableDate field
    house.unavailableDate = house.unavailableDate.concat(unavailableDates);
    await house.save();

    return res.status(201).json({ msg: 'Booking successful', booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Booking failed' });
  }
});







router.get('/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find().populate('house'); // Populate the house details
      return res.status(200).json({ bookings });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Failed to fetch bookings' });
    }
  });
  
  // Delete a booking by ID
  router.delete('/deleteBooking/:id', async (req, res) => {
    console.log('enter delete')
    try{
        const _id=req.params.id
        
        await Booking.findByIdAndDelete({_id})
        
      
         return res.status(200).json({msg:'deleted the item'})
       
       }
       catch(e){
        res.status(400).json({
          msg:'could not process the delete request '
        })
       }
  });





module.exports = router;
