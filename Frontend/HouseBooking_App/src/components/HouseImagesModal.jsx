import React from 'react'

function HouseImagesModal({images}) {
  
  return (
    <div className='ImagesModal'>
      
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
