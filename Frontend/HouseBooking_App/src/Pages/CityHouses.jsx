import React, { useState, useContext, useEffect } from 'react'
import { useLoaderData, useNavigate, useParams, Link } from 'react-router-dom'
import './css/houses.css'
import CityContext from '../../Context/CityContext'


function CityHouses() {
    const { cityHouseData, getCityHouses } = useContext(CityContext)
    const { id } = useParams()

    useEffect(() => {
        getCityHouses(id)
    }, [id])




    return (
        <>
            {/* {
        isloading&&<div>...loading</div>
    }
    {
        isError&&<div>{isError}</div>
} */}
            
               

                <div className="city_houses_container">
                  <div className="city_house_h1">{cityHouseData[0].city.toUpperCase()} Houses</div>
                    {
                        <div className="houses-card-con">
                            {
                                cityHouseData.map((house) => {
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

                            }


                        </div>
                    }

                </div>
           
        </>
    )
}

export default CityHouses


