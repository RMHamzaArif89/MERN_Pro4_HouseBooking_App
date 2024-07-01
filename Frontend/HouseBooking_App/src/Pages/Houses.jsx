import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useLoaderData,useNavigate,Link } from 'react-router-dom'
import './css/houses.css'
import axios from 'axios'
import HouseContext from '../../Context/HouseContext.jsx'



function Houses() {
  const { getHouses, housesData ,setHousesData} = useContext(HouseContext)
 

  useEffect(() => {
getHouses()
  }, [])


  const [values, setValues] = useState({
    max_rooms: '',
    max_price: '',
    city: '',

  })
  

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

  const handleSubmit = async (e) => {

    e.preventDefault();

    
   
try{
  
  const response = await fetch( `http://localhost:5000/api/houses?rooms=${values.max_rooms}&price=${values.max_price}&city=${values.city}`, {
    method: 'GET',
    credentials:'include'

  })
  const res = await response.json()
  if (response.ok) {
    setHousesData(res.data)
    
 

  }else{
    console.log('false')
  }

}catch(e){
  console.log(e)
}
}
    
  
  return (
    <>
      {/* {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
} */}
      <div className="houses-container">
        <div className="houses-con-left">

          <form onSubmit={(e) => { handleSubmit(e) }} className="houses-form">
            <div className="form-heading">Find Your Dream House</div>
            <div className="form-row">
              <div className="input-data">
                <input onChange={(e) => { handleChange(e) }} value={values.max_price} name="max_price" type="number" required/>
                <div className="underline"></div>
                <label for="">MaximumpPrice</label>
              </div>
              <div className="input-data">
                <input onChange={(e) => { handleChange(e) }} value={values.max_rooms} name="max_rooms" type="number"  required/>
                <div className="underline"></div>
                <label for="">Maximum Rooms</label>
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <input onChange={(e) => { handleChange(e) }} value={values.city} name="city" type="text" required/>
                <div className="underline"></div>
                <label for="">City Location</label>
              </div>
              <div className="input-data">
                <input onChange={(e) => { handleChange(e) }} value={''} name="persons" type="number" />
                <div className="underline"></div>
                <label for="">Persons</label>
              </div>

            </div>
            <button className="submit-btn" type="submit">Sort</button>

          </form>

          <div className="houses-offer">
            <div className="h1">Special Offer</div>
            <div className="h2">On All the Houses</div>
            <div className="offer">30% Off</div>
            <div className="time">30Days left</div>
          </div>
        </div>

        <div className="houses-con-right">
          <div className="houses-card-con">
            {
              housesData.map((house) => {
                return (
                  <div className='houses-card' key={house._id}>

                    <img src={'http://localhost:5000/' + house.images[0]} alt="" className="houses-img" />
                    <div className="houses-detail">
                      <div className="houses-rooms">Rooms:{house.rooms}</div>
                      <div className="houses-price">Price:{house.rentPerDay}$</div>
                      <div className="houses-city">City:{house.city}</div>
                      <div className="houses-address">Address:{house.address}</div>
                    
                    </div>
                    <Link to={`/houseDetail/${house._id}`} className='houses-moreDetail-btn'>More Detail</Link>
                   
                  </div>
                )
              })
              // <div className="houses-images">
              // {
              //     house.images.map((img)=>{
              //         return <div className="houses-img">{img}</div>
              //     })
              // }
              //            </div>

            }


          </div>
        </div>
      </div >
    </>
  )
}

export default Houses




//get orders data
