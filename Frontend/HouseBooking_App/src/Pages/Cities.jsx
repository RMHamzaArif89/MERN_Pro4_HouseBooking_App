import React, { useState , useContext ,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import './css/cities.css'
import CityContext from '../../../Context/CityContext'


function Cities() {
  const {citiesData,getCities} = useContext(CityContext)
  const [search,setSearch]=useState('')
  useEffect(()=>{
     getCities(search)
  },[search])


  return (
    <>
      {/* {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
} */}
      <div className="cities">
        <div className="cities-heading">
          <div className="cities-h1">
            Out Network in Differnet Cities
          </div>
          <input type="search" name="search" placeholder='search city' value={search} className='cities-input' onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div className="cities-container">

          {
            citiesData.map((city) =>
              <div className="cities-card">
                 <img className="cities-img" src={'http://localhost:5000/' + city.img} />
               <div className="card-text">
               <div className="name">{city.name}</div>
                <div className="country">{city.country}</div>
                <div className="detail">{city.detail}</div>
                <div className="houses">Available Houses</div>
               </div>
              </div>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Cities





