import React from 'react'
import {useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link ,useNavigate} from 'react-router-dom'
import './css/houses.css'

function Houses() {
  const houses = useLoaderData()


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
        </div>
      
      <div className="houses-con-right">
        <div className="houses-card-con">
          {
            houses.map((house) => {
              return (
                <div className='houses-card' key={house._id}>
                  <div className="houses-name">{house.name} House🏠</div>
                  <div className="houses-rooms">Rooms:{house.rooms}</div>
                  <img src={'http://localhost:5000/' + house.images[0]} alt="" className="houses-img" />
                  <Link rel="stylesheet" to={`/HouseDetail/:${house._id}`} className='houses-detail' >Detail</Link>
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
export const HouseLoader = async () => {

  const response = await fetch('http://localhost:5000/api/Houses', {
    method: 'GET',

  })
  const res = await response.json()
  if (response.ok) {
    return res.data

  }

}
