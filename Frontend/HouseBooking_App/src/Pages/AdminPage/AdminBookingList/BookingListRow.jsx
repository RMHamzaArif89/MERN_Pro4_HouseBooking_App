import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function BookingRow({ booking, deleteBooking }) {
  const { name, email, startDate, endDate, totalPrice, house } = booking;

  return (
    <>
      <div className='adminEditPage-row' key={booking._id}>
        {/* Assuming house has image */}
        <img src={'http://localhost:5000/' +house.images[0]} alt="House" className="adminEditPage-img" />

        <div className="adminEditPage-detail">
          <div className="adminEditPage-name">Name: {name}</div>
          <div className="adminEditPage-email">Email: {email}</div>
          <div className="adminEditPage-dates">
            Booking Dates: {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
          </div>
          <div className="adminEditPage-totalPrice">Total Price: ${totalPrice}</div>
          <div className="adminEditPage-house">House Name: {house.name}, City {house.city}</div>
          <div className="adminEditPage-address">Address{house.address}</div>
        </div>
      </div>

      <div className="adminEditPageBtns">
        <div className="adminEventsDelete adminEditPageIcon" onClick={() => deleteBooking(booking._id)}> 
          <MdDelete /> 
        </div>
        <div className="adminEventsEdit adminEditPageIcon"> 
          <FaEdit /> 
        </div>
      </div>
    </>
  );
}

export default BookingRow;

