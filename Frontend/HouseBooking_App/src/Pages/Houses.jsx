import React, { useEffect } from 'react'
import {useState,useContext} from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link ,useNavigate} from 'react-router-dom'
import './css/houses.css'
import HouseContext from '../../../Context/HouseContext'

function Houses() {
const {getHouses,housesData}=useContext(HouseContext)


  useEffect(()=>{

  },[])


  const [values, setValues] = useState({
    max_rooms: '',
    max_price: '',
    city:'',

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

const handleSubmit = async (e) => {

    e.preventDefault();

    try {
        
        const res = await axios.get(
            "http://localhost:5000/api/houses",
            {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        ).then(
            setValues({
                max_rooms: '',
                max_price: '',
                city:''

            })
        )
        console.log(res)
        if (res.statusText == 'OK') {
            navigate('/Houses')
        }





    }
    catch (err) {
        console.log(err)
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
          
          <form onSubmit={handleSubmit} className="houses-form">
          <div className="form-heading">Find Your Dream House</div>
            <div className="form-row">
              <div className="input-data">
                <input onChange={(e) => { handleChange(e) }} value={values.max_price} name="max_price" type="number" required />
                <div className="underline"></div>
                <label for="">MaximumpPrice</label>
              </div>
              <div className="input-data">
                <input onChange={(e) => { handleChange(e) }} value={values.max_rooms} name="max_rooms" type="number" required />
                <div className="underline"></div>
                <label for="">Maximum Rooms</label>
              </div>
            </div>
           
          <div className="form-row">
          <div className="input-data">
              <input onChange={(e) => { handleChange(e) }} value={values.city} name="city" type="text" required />
              <div className="underline"></div>
              <label for="">City Location</label>
            </div>
            <div className="input-data">
              <input onChange={(e) => { handleChange(e) }} disabledvalue={''} name="max-rooms" type="number" required />
              <div className="underline"></div>
              <label for="">Persons</label>
            </div>

          </div>
          <div className="submit-btn" type="submit">Sort</div>

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
                  <Link rel="stylesheet" to={`/HouseDetail/:${house._id}`} className='houses-moreDetail-btn' >More Detail</Link>
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
