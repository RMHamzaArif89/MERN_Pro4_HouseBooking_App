import React, { useRef, useState } from 'react'

function ImgCon({homeSlider}) {
  // console.log(homeSlider)
 
    const imgSliderStyle={
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${homeSlider})`,
        backgroundPosition:'center',
        backgroundSize:' 100% 100%',
    }
  
  return (
    <div className='imgCon' style={imgSliderStyle}>
      <div className='imgConText'>
         
      <div className="imgSliderH1">GPCSF is one of largest College in FSD</div>
        <div className="imgSliderH2">It serves you with excellency</div>
        

      </div>
      
    </div>
  )
}

export default ImgCon
