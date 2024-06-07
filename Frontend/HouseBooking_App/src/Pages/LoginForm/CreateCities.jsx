import React, { useContext, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function CreateCity() {
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


    const handleSubmit=async(e)=>{

      e.preventDefault();
      const formData=new FormData()
      formData.append("name",values.name)
      formData.append("country",values.country)
      formData.append("img",values.img)
      formData.append("detail",values.detail)


    try{
       const res=await axios.post(
            "http://localhost:5000/api/createCity",
            formData,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
            }
            ).then(
                setValues({
                    name:'',
                    country:'',
                    detail:'',
                    img:'',
                     
                })
            )
            console.log(res)
            if(res){
                navigate('/Cities')
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
                            <input onChange={(e) => { handleChange(e) }} value={values.country} name="country" type="text" required />
                            <div class="underline"></div>
                            <label for="">Country</label>
                        </div>
                     </div>   
                    <div className="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.detail} name="detail" type="text" required />
                            <div class="underline"></div>
                            <label for="">Detail</label>
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
