import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminHousesRow({ house, deleteHouse }) {

  return (
    <>

      <div className='adminEditPage-row' key={house._id}>
<div className="adminEditPage-images">
{
  
  house.images.map((img)=>{
    return <img src={'http://localhost:5000/' + img} alt="" className="adminEditPage-img" />
  })
}
</div>
       
        <div className="adminEditPage-detail">
          <div className="adminEditPage-rooms">Rooms:{house.rooms}</div>
          <div className="adminEditPage-price">Price:{house.rentPerDay}$</div>
          <div className="adminEditPage-city">City:{house.city}</div>
          <div className="adminEditPage-address">Address:{house.address}</div>

        </div>

      </div>
      <div className="adminEditPageBtns">
        <div className="adminEventsDelete adminEditPageIcon" onClick={() => { deleteHouse(house._id) }}> <MdDelete /> </div>
        <div className="adminEventsEdit adminEditPageIcon"> <FaEdit /> </div>
      </div>
    </>
  )
}

export default AdminHousesRow
