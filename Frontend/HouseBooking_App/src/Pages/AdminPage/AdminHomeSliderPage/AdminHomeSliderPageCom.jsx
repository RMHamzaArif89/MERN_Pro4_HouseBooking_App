import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminHomeSlideRow from './AdminHomeSliderPageRow';



function AdminHomeSliderCom() {
  const [homeSlider, setHomeSlider] = useState([]);
  const [publishError, setPublishError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getNotice = async () => {
      const res = await axios.get('http://localhost:5001/api/homeSlider/getHomeSlider');
      setHomeSlider(res.data.homeSlider)
    };
    getNotice();

  }, [loading]);





  const deleteHomeSlider = async (Id) => {

    try {
      setLoading(true)
      const res = await axios.delete(`http://localhost:5001/api/homeSlider/deleteHomeSlider/${Id}`);
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        console.log('ok')
        // navigate(`/post/${data.slug}`);
      }

    }
    catch (e) {
      setPublishError('something went wrong')
    }
    finally {
      setLoading(false)
    }


  }
  return (
    <div className='adminEditPageCom'>
      <div className="adminEditPageHeading">
        Home Slides
      </div>
      <div className="adminEditPageRows">
        {
          homeSlider.length > 0 ? (
            loading ? <div className="loading">
              ...loading
            </div> : (homeSlider.map((homeSlide) =>
              <div className="adminEditPageRow">
                <AdminHomeSlideRow homeSlide={homeSlide} deleteHomeSlider={deleteHomeSlider} />
              </div>))
          ) : <div className="noEditPage">No Notice Found</div>
        }
      </div>
    </div>
  )
}

export default AdminHomeSliderCom
