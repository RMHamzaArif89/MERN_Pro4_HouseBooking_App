import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminCitiesRow({ city, deleteCity }) {

  return (
    <>

      <div className='adminEditPage-row' key={city._id}>
 <img src={'http://localhost:5000/' + city.img} alt="" className="adminEditPage-img" />

       
        <div className="adminEditPage-detail">
          <div className="adminEditPage-name">City:{city.name}</div>
          <div className="adminEditPage-country">Country:{city.country}</div>
          <div className="adminEditPage-detail">City:{city.detail}</div>
          

        </div>

      </div>
      <div className="adminEditPageBtns">
        <div className="adminEventsDelete adminEditPageIcon" onClick={() => { deleteCity(city._id) }}> <MdDelete /> </div>
        <div className="adminEventsEdit adminEditPageIcon"> <FaEdit /> </div>
      </div>
    </>
  )
}

export default AdminCitiesRow
