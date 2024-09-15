import { useEffect, useRef, useState } from 'react'
import Data from './imgSliderData'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { GoDot } from "react-icons/go";
import ImgCon from './ImgCon';
import './imgSlider.css'
import axios from 'axios';

function ImgSlider() {
    const [homeSlider, setHomeSlider] = useState(Data);
    const [publishError, setPublishError] = useState(null)
    const [loading, setLoading] = useState(false)
    let [val, setVal] = useState(0)
  
    // useEffect(() => {
    //   const getHomeSlider = async () => {
    //     const res = await axios.get('http://localhost:5001/api/homeSlider/getHomeSlider');
    //     setHomeSlider(res.data.homeSlider)
    //   };
    //   getHomeSlider();
      
  
    // }, []);
  
  

    let clickFunc=(ind)=>{
        setVal(ind)
    }

    let LeftClick = () => {
        if (val <= 0) {
            setVal(homeSlider.length - 1)
        }
        else {
            setVal(val - 1)
        }

    }
    let RightClick = () => {

        if (val == homeSlider.length - 1) {
            setVal(0)
        } else {
            setVal(val + 1)
        }
    }

    let changeSlide = () => {
        if (val == homeSlider.length - 1) {
            setVal(0)
        } else {
            setVal(val + 1)
        }

    }
    // console.log(homeSlider.length)

    useEffect(() => {
        setTimeout(() => {
            changeSlide()
        }, 10000)
       


    })

    return (
        <div className='imgSlider'>
            {
                homeSlider.length>0?(
<ImgCon homeSlider={homeSlider[val].imgUrl} />
                ): <div>...loading</div>
            }
            {/* {console.log(homeSlider[val])} */}
            <div className="sliderLeft sliderMove" onClick={()=>{LeftClick()}}>{<FaChevronLeft/>}</div>
            <div className="sliderRight sliderMove" onClick={()=>{RightClick()}}>{<FaChevronRight />}</div>
            <div className="pagin">
                {
                    homeSlider.map((_, ind) => {
                        return <li key={ind} className='sliderDot' onClick={() => { clickFunc(ind) }} style={{ backgroundColor: val == ind && 'darkred' }}> </li>
                    })
                }
                
            </div>
        </div>
    )

}

export default ImgSlider
