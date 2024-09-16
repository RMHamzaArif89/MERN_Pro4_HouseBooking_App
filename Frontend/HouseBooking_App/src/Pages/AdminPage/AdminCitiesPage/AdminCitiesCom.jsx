import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminCitiesRow from './AdminCitiesRow';

function AdminCitiesCom() {
  const [cities, setCities] = useState([]); // Holds the cities data
  const [publishError, setPublishError] = useState(null); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch cities on component mount
  useEffect(() => {
    const getCities = async () => {
      const res = await axios.get('http://localhost:5000/api/cities');
      setCities(res.data.Data)
      // console.log(res.data.Data,'data')
   
    };
    getCities();

  }, [loading]); // Empty dependency array ensures this runs once on mount

  // Delete city function
  const deleteCity = async (Id) => {
    try {
      setLoading(true); // Set loading while deleting
      const res = await axios.delete(`http://localhost:5000/api/deleteCity/${Id}`);
      if (res.status === 200) {
        // Filter out the deleted city from the state
        setCities((prevCities) => prevCities.filter((city) => city._id !== Id));
        setPublishError(null);
        console.log('City deleted successfully');
      } else {
        setPublishError('Failed to delete city');
      }
    } catch (error) {
      setPublishError('Something went wrong while deleting the city');
      console.error(error);
    } finally {
      setLoading(false); // Stop loading after deletion
    }
  };

  return (
    <div className='adminEditPageCom'>
      <div className="adminEditPageHeading">
        Cities
      </div>

      <div className="adminEditPageRowCom">
        {loading ? (
          <div className="loading">...loading</div>
        ) : cities.length > 0 ? (
          cities.map((city) => (
            <div key={city._id} className="adminEditPageBox">
              <AdminCitiesRow city={city} deleteCity={deleteCity} />
            </div>
          ))
        ) : (
          <div className="noEvents">No City Found</div>
        )}
      </div>

      {publishError && <div className="error-message">{publishError}</div>}
    </div>
  );
}

export default AdminCitiesCom;
