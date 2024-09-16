import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import AdminCitiesCom from './AdminCitiesCom';
import './adminCitiesPage.css'


function AdminCitiesPage() {
  const [publishError,setPublishError]=useState(null)
  const[loading,setLoading]=useState(false)
  const [values, setValues] = useState({
    name:'',
    country:'',
    detail:'',
    img:'',

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
    const formData=new FormData()
    formData.append("name",values.name)
    formData.append("country",values.country)
    formData.append("img",values.img)
    formData.append("detail",values.detail)


    try {
        
        setLoading(true)
        const res = await axios.post(
            "http://localhost:5000/api/createCity",
            formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials:true
        }
        ).then(
            setValues({
              name:'',
              country:'',
              detail:'',
              img:'',
            })
        ).then(res=>console.log(res))

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

      <input onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files[0] } })} name="img" type="file" accept='image/*' required className='adminEditPageImgInp'  />
        <input onChange={(e) => { handleChange(e) }} value={values.name} name="name" type="text" required className='adminEditPageInp' placeholder='City Name'/>
        <ReactQuill theme="snow"  onChange={(value) => {
            setValues({ ...values, detail: value });
          }} className='adminEditPageDetail' placeholder="Detail" 
          />;
      
      <input onChange={(e) => { handleChange(e) }} value={values.country} name="country" type="text" required className='adminEditPageInp' placeholder='Country'/>
     
      
        <button className="adminEditPagebtn" type="submit">Create House</button>

      </form>

    {
      loading?<div className="loading">
...loading
      </div>:  <AdminCitiesCom/>
    }


    </div>
  )
}

export default AdminCitiesPage
