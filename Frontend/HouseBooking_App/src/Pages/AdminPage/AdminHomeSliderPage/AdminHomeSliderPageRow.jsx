import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminHomeSlideRow({ homeSlide, deleteHomeSlider }) {
    
    return (
        <>
           <img src={`http://localhost:5001/${homeSlide.img}`} alt="" className="adminEditPageImg" />
            <div className="adminEditPageTitle">{homeSlide.heading}</div> 
            <div className='adminEditPageDet'>{homeSlide.subHeading}</div>
          <div className="adminEditPageBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteHomeSlider(homeSlide._id) }}> <MdDelete /> </div>
            <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminHomeSlideRow