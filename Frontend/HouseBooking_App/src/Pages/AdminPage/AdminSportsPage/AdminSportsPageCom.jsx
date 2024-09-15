import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminSportsNewsRow from './AdminSportsPageRow';



function AdminSportsNewsCom() {
  const [sportsNews, setNotice] = useState([]);
  const [publishError, setPublishError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getSportsNews = async () => {
      const res = await axios.get('http://localhost:5001/api/sportsNews/getSportsNews');
      setNotice(res.data.sportsNews)
    };
    getSportsNews();

  }, [loading]);





  const deleteSportsNews = async (Id) => {

    try {
      setLoading(true)
      const res = await axios.delete(`http://localhost:5001/api/sportsNews/deleteSportsNews/${Id}`);
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
        Sports News
      </div>
      <div className="adminEditPageRows">
        {
          sportsNews.length > 0 ? (
            loading ? <div className="loading">
              ...loading
            </div> : (sportsNews.map((sportsNews) =>
              <div className="adminEditPageRow">
                <AdminSportsNewsRow sportsNews={sportsNews} deleteSportsNews={deleteSportsNews} />
              </div>))
          ) : <div className="noEditPage">No Sports News Found</div>
        }
      </div>
    </div>
  )
}

export default AdminSportsNewsCom
