import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import AdminHousesCom from './AdminHousesCom';
import './adminHousesPage.css'


function AdminHousesPage() {
  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({
    name: '',
    rooms: '',
    detail: '',
    images: null,
    rentPerDay: '',
    address: '',
    city:'',

})
const navigate = useNavigate()

const handleChange = (e) => {

    // e.preventDefault()

    let name = e.target.name;
    let val = e.target.value;

    setValues((pre) =>
    ({
        ...pre, [name]: val
    }
    )
    )
    

}

const handleSubmit =async(e) => {

    e.preventDefault();
    const formData = new FormData()
    formData.append("name", values.name)
    formData.append("rooms", values.rooms)
    for(let i=0; i<=values.images.length;i++){
        formData.append('images',values.images[i])
    }
    formData.append("detail", values.detail)
    formData.append("address", values.address)
    formData.append("rentPerDay", values.rentPerDay)
    formData.append("city",values.city)


    try {
        
        setLoading(true)
        const res = await axios.post(
            "http://localhost:5000/api/createHouse",
            formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials:true
        }
        ).then(
            setValues({
                name: '',
                rooms: '',
                detail: '',
                images: null,
                rentPerDay: '',
                address: '',
                city:''

            })
        ).then(res=>console.log(res))
       
        
        if (res) {
            navigate('/Houses')
        }
       





    }
    catch (err) {
        console.log(err)
    }
    finally{
      setLoading(false)
     } 
  }


//update event
const handlePostSubmit = async (e) => {
  e.preventDefault();

    // method: 'PUT',
    // headers: {
    //   'Content-Type': 'application/json',
    // }


    try{
      setLoading(true)
      e.preventDefault()
  
      const formData=new FormData()
      formData.append("img",values.img)
      formData.append("title",values.title)
      formData.append("date",values.date)
      formData.append("detail",values.detail)
      formData.append("time",values.time)
      formData.append("location",values.location)
  
  
      const res=await axios.post(
        '/createEvent',
        `http://localhost:5001/api/events/updatepost/${formData._id}`,
           formData,{
           headers:{
             "Content-Type":"multipart/form-data",
           
           }
           }
           )
          .then(
               setValues({
                img: '',
                title: '',
                detail: '',
                date: '',
                time: '',
                location: '',
               })
           )
  
   }
   catch(err){
    setPublishError('Something went wrong');
   }finally{
    setLoading(false)
   }  
};
  return (
    <div className='adminEditPage'>
      <form className='adminEditPageForm' onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
      <div className="adminEditPageHeading">Create Event</div>

        <input multiple onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files } })} name="images" type="file" accept='image/*' className='adminEditPageImgInp'  />
        <input onChange={(e) => { handleChange(e) }} value={values.name} name="name" type="text" required className='adminEditPageInp' placeholder='House Name'/>
        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminEditPageDetail' placeholder="Detail" 
          />;
      <input onChange={(e) => { handleChange(e) }} value={values.rooms} name="rooms" type="number" required className='adminEditPageInp' placeholder='Rooms'/>
      <input onChange={(e) => { handleChange(e) }} value={values.address} name="address" type="text" required className='adminEditPageInp' placeholder='Address'/>
      <input onChange={(e) => { handleChange(e) }} value={values.rentPerDay} name="rentPerDay" type="number" required className='adminEditPageInp' placeholder='Rent Per Day'/>
        <input onChange={(e) => { handleChange(e) }} value={values.city} name="city" type="text" required className='adminEditPageInp' placeholder='City'/>
        <button className="adminEditPagebtn" type="submit">Create House</button>

      </form>

    {
      loading?<div className="loading">
...loading
      </div>:  <AdminHousesCom/>
    }


    </div>
  )
}

export default AdminHousesPage
