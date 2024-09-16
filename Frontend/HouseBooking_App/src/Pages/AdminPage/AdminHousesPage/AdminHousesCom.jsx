import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import navigate from 'react-router-dom'
import AdminHousesRow from './AdminHousesRow';



function AdminHousesCom() {
  const [houses, setHouses] = useState([]);
  const [publishError,setPublishError]=useState(null)
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get('http://localhost:5000/api/houses');
      setHouses(res.data.data)
      // console.log(res.data.data,'data')
   
    };
    getHouses();

  }, [loading]);
  // console.log(houses)





  const deleteHouse=async(Id)=>{

    try{
      setLoading(true)
      const res = await axios.delete(`http://localhost:5000/api/deleteHouse/${Id}`);
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
    catch(e){
       setPublishError('something went wrong')
    }
    finally{
      setLoading(false)
    }


  }
  return (
    <div className='adminEditPageCom'>
      <div className="adminEditPageHeading">
        Houses
      </div>
    <div className="adminEditPageRowCom">
  {
    houses.length>0?  (
      loading?<div className="loading">
...loading
      </div>: (houses.map((house) =>
          <div className="adminEditPageBox">
            <AdminHousesRow house={house} deleteHouse={deleteHouse}/>
          </div>))
    ):<div className="noEvents">No House Found Found</div>
  }
    </div>
    </div>
  )
}

export default AdminHousesCom
