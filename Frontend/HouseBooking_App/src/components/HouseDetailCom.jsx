import React, { useState } from 'react'
import { MdMore } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { BiSolidDetail } from "react-icons/bi";
import { IoMdPricetags } from "react-icons/io";

function HouseDetailCom({Data}) {
    let [show,setShow]=useState(false)
  return (
    <div className="houseDetail-con">
    <div className="house-item house-name">{Data.name} House <GiFamilyHouse/> </div>
    <div className="house-item house-detail">{Data.detail}</div>
    <div className="house-item house-price">{Data.rentPerDay}$ RentPerDay <IoMdPricetags/> </div>
    <div className="house-img">
      <img src={'http://localhost:5000/' + Data.images[0]} alt="" className="house-imgOne" />
     <MdMore className='more-images-icon' onMouseLeave={()=>{setShow(false)}} onMouseEnter={()=>{setShow(true)}}/>
     <div className={show?'display-show show-more':'show-more'}>Show More</div>
     <div className="house-rooms">{Data.rooms} Rooms</div>

    </div>
    <div className="house-item house-detail-city">{Data.city} </div>
    <div className="house-item house-detail-address">{Data.address} <IoLocation className='locationClass'/> </div>
    
  </div>
  )
}

export default HouseDetailCom
