import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import './css/houseDetail.css'
import { useParams } from 'react-router-dom'
import { useContext , useState } from 'react'
import HouseContext from '../../Context/HouseContext';
import HouseDetailCom from '../components/HouseDetailCom';
import HouseImagesModal from '../components/HouseImagesModal';
import BookHouse_Comp from '../components/HouseBook/BookHouse_Comp'
import { FaHome } from "react-icons/fa";

function HouseDetail() {
    const {id} = useParams()
    const {getHouseDataById,singleHouseData,showBooking,setShowBooking}=useContext(HouseContext)
    const [showImagesModal,setShowImagesModal]=useState(false)
    useEffect(()=>{

        getHouseDataById(id)
        
    },[id])
    
    
    
  return (
   <div className={showImagesModal?"houseDetail houseDetail-opacity":"houseDetail"}>
    <div className="houseBookingBtn" onClick={()=>{setShowBooking((pre)=>!pre)}}>
      Book Now <FaHome/>
    </div>
    {
      showBooking && <BookHouse_Comp/>
    }
    {
      showImagesModal&& ReactDom.createPortal(
        <HouseImagesModal images={singleHouseData.images} setShowImagesModal={setShowImagesModal}/>,
        document.querySelector('.modalPortal')
      )
    }
    <div className="houseDetail-h1">Check Your Dream House to stay some time.</div>
    {/* <div className="houseDetail-h2">These are all fully verified & provide the best facilities for you. Obviosly you will require to spent some more days here. Once our customer get our services. They shurely come back & give review. It will be great pleasure and expience for you. We provide your house like home</div> */}
    <div className="houseDetail-h2">40% off</div>
    
 {
  singleHouseData&&<HouseDetailCom Data={singleHouseData} 
  setModal={setShowImagesModal}/>
     
  }
 
   </div>
  )
}

export default HouseDetail
