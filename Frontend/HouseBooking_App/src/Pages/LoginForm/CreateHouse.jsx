import React, { useContext, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function CreateCity() {
    const [values, setValues] = useState({
       name:'',
       rooms:'',
       detail:'',
       images:'',
       unavailableDates:'',
       rentPerDay:'',
       address:'',
        
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


    const handleSubmit=async(e)=>{

      e.preventDefault();
      const formData=new FormData()
      formData.append("name",values.name)
      formData.append("rooms",values.rooms)
      formData.append("images",values.images)
      formData.append("detail",values.detail)
      formData.append("address",values.address)
      formData.append("unavailableDates",values.unavailableDates)
      formData.append("rentPerDay",values.rentPerDay)


    try{
       const res=await axios.post(
            "http://localhost:5000/api/createHouse",
            formData,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
            }
            ).then(
                setValues({
                    name:'',
                    rooms:'',
                    detail:'',
                    images:'',
                    unavailableDates:'',
                    rentPerDay:'',
                    address:'',
                     
                })
            )
            if(res){
                navigate('/')
            }





    }
    catch(err){
        console.log(err)
    }

    }
    


    return (
        <div className="form-con">
            <div class="container">
                <div class="text">
                    Add the Item
                </div>
                <form onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
                    <div class="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="name" type="text" required />
                            <div class="underline"></div>
                            <label for="">Name</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="country" type="text" required />
                            <div class="underline"></div>
                            <label for="">Name</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="detail" type="text" required />
                            <div class="underline"></div>
                            <label for="">Name</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files[0] } })} name="img" type="file" accept='image/*' required />
                            <div class="underline"></div>

                        </div>
            
                   

                    </div>
                    <button className="btn" type="submit">CreateCity</button>

                </form>
            </div>
        </div>
    )
}
export default CreateCity