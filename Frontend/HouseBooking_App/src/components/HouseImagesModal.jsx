import React from 'react'
import { ImCross } from "react-icons/im";


function HouseImagesModal({images,setShowImagesModal}) {
  
  return (
    <div className='ImagesModal'>
      <div className="cross-modal" onClick={()=>{setShowImagesModal((pre)=>!pre)}}><ImCross/></div>
      
      {
images&& images.map((img)=>{
    return(
       <img src={'http://localhost:5000/' + img} alt='' className="modal-img" />
    )
})
      }
      
    </div>
  )
}

export default HouseImagesModal
