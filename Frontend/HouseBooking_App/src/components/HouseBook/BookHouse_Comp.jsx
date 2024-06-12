import React, { useContext, useEffect, useRef, useState } from 'react'
// import './order.css'
import HouseContext from '../../../Context/HouseContext';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom'
import './bookHouseCom.css'
import { DateRange, DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


function BookHouse_Comp() {
  const { setShowBooking } = useContext(HouseContext);
  // get the target element to toggle 
  let [openDateBox, setOpenDateBox] = useState(false)
  let refOne = useRef()


  const [values, setValues] = useState({
    name: '',
    email: '',
    DateRange: ([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]),
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    // e.preventDefault()

    let name = e.target.name;
    let val = e.target.value;

    setValues((pre) =>
    ({
      ...pre, [name]: val
    }
    )
    )

  }
  //update data
  const handleSubmit = async (e) => {

    // console.log(values)
    e.preventDefault();
    console.log(values)
    // try{
    // const response=await fetch(`http://localhost:5000/api/bookHouse`,{
    //   method:'POST',
    //   headers:{
    // "Content-Type":'application/json'
    //   },
    //   body:JSON.stringify(values)
    // })
    // // console.log(response)
    // if(response.ok){

    // setValues({
    //   name:'',
    //   email:'',
    //   DateRange:'',

    // })
    // console.log(response.data)
    // navigate('/')
    // }
    //   }

    // catch(e){
    //   console.log('send error',e)
    // }





  }


  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpenDateBox(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenDateBox(false)
    }
  }
  return (
    <div className='order-form'>
      <div className="cart-close" onClick={() => { setShowBooking(pre => !pre) }}><ImCross /></div>

      <div className="order-con">
        <div className="brand-logo"></div>
        <div className="brand-title">RM Booking App</div>
        <form className="inputs" onSubmit={handleSubmit}>
          <label>EMAIL</label>
          <input type="email" placeholder="@gmail.com" name="email" onChange={(e) => { handleChange(e) }} value={values.email} />
          <label>Name</label>
          <input type="text" placeholder="Name" name="name" onChange={(e) => { handleChange(e) }} value={values.name} />
          {/* date range */}
          <div className="calendarWrap">
            <label>Select Date</label>
            <input
              value={`${format(values.DateRange[0].startDate, "MM/dd/yyyy")} to ${format(values.DateRange[0].endDate, "MM/dd/yyyy")}`}
              readOnly
              className="inputBox"
              onClick={() => setOpenDateBox(pre => !pre)}
            />
            {/* {console.log(openDateBox)} */}
            <div ref={refOne}>
              {openDateBox &&
                <DateRangePicker
                  onChange={item => setValues({ 'DateRange': [item.selection] })}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={values.DateRange}
                  months={2}
                  direction="horizontal"
                  className="calendarElement"
                />
              }
            </div>

          </div>

          <button type="submit">Book Now  </button>
        </form>

      </div>

    </div>
  )
}

export default BookHouse_Comp

