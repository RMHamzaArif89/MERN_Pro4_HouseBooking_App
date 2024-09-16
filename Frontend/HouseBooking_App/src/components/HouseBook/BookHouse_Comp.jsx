import React, { useContext, useEffect, useRef, useState } from 'react';
import HouseContext from '../../../Context/HouseContext';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import './bookHouseCom.css';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function BookHouse_Comp({ selectedHouseId ,pricePerDay,Data}) {
  const { setShowBooking ,singleHouseData} = useContext(HouseContext);
  let [openDateBox, setOpenDateBox] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let refOne = useRef();
// console.log(singleHouseData)
  const [values, setValues] = useState({
    name: '',
    email: '',
    DateRange: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
      },
    ],
    totalPrice:totalPrice
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    setValues((pre) => ({
      ...pre,
      [name]: val,
    }));
  };

  useEffect(() => {
    let Difference_In_Time = values.DateRange[0].endDate - values.DateRange[0].startDate;

    // Calculating the number of days between two dates
    let totalDays = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    setTotalPrice(totalDays * singleHouseData.rentPerDay); // Assuming rent per day is 100
  }, [values.DateRange]);

  // Handle form submission (booking)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(values.totalPrice)
      const response = await fetch(`http://localhost:5000/api/bookHouse`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({
          ...values,
          houseId: selectedHouseId, // Pass selected house ID for booking
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('House booked successfully!');
        setErrorMessage('');
        console.log('Booking data:', data);

        // Reset form after successful booking
        setValues({
          name: '',
          email: '',
          DateRange: [
            {
              startDate: new Date(),
              endDate: addDays(new Date(), 7),
              key: 'selection',
            },
          ],
        });

        // Navigate to home or another page
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setErrorMessage('Booking failed. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.log('Booking error:', error);
      setErrorMessage('Booking failed. Something went wrong.');
      setSuccessMessage('');
    }
  };

  // Hide the date range picker on Escape or outside click
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpenDateBox(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenDateBox(false);
    }
  };

  return (
    <div className='order-form'>
      <div className="cart-close" onClick={() => setShowBooking((pre) => !pre)}>
        <ImCross />
      </div>

      <div className="order-con">
        <div className="brand-title">RM Booking App</div>
        <form className="inputs" onSubmit={handleSubmit}>
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="@gmail.com"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
          />

          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={values.name}
            required
          />

          {/* Date range picker */}
          <div className="calendarWrap">
            <label>Select Date</label>
            <input
              value={`${format(values.DateRange[0].startDate, "MM/dd/yyyy")} to ${format(values.DateRange[0].endDate, "MM/dd/yyyy")}`}
              readOnly
              className="inputBox"
              onClick={() => setOpenDateBox((pre) => !pre)}
            />
            <div ref={refOne}>
              {openDateBox && (
                <DateRangePicker
                  onChange={(item) => setValues({ ...values, DateRange: [item.selection] })}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={values.DateRange}
                  months={2}
                  direction="horizontal"
                  className="calendarElement"
                />
              )}
            </div>
          </div>

          <label>Total Price</label>
          <input
            type="text"
            placeholder="Total Price"
            disabled
            value={totalPrice}
            
          />

          <button type="submit">Book Now</button>

          {/* Success and error messages */}
          {successMessage && <p className="successMessage">{successMessage}</p>}
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default BookHouse_Comp;
