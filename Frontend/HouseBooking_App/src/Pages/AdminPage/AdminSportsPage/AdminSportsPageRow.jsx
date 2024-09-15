import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AdminSportsNewsRow({ sportsNews, deleteSportsNews }) {
    
    return (
        <>
           <img src={`http://localhost:5001/${sportsNews.img}`} alt="" className="adminEditPageImg" />
            <div className="adminEditPageTitle">{sportsNews.title}</div> 
            <div className="adminEditPageTitle">{sportsNews.date}</div> 
            <div className='adminEditPageDet'  dangerouslySetInnerHTML={{__html:sportsNews.detail}}   />
          <div className="adminEditPageBtns">
          <div className="adminEditPageDelete adminEditPageIcon" onClick={() => { deleteSportsNews(sportsNews._id) }}> <MdDelete /> </div>
            <div className="adminEditPageEdit adminEditPageIcon"> <FaEdit /> </div>
          </div>
        </>
    )
}

export default AdminSportsNewsRow
