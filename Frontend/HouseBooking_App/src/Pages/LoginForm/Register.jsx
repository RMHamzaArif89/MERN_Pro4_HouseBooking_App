import React, { useContext, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Form() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        
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
      formData.append("email",values.email)
      formData.append("name",values.name)
      formData.append("password",values.password)
      


    try{
       const res=await axios.post(
            "http://localhost:5000/api/createUser",
            formData,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
            }
            ).then(
                setValues({
                    name:'',
                    email:'',
                    password:'',
                
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
                <form onSubmit={(e) => { handleSubmit(e) }} >
                    <div class="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="name" type="text" required />
                            <div class="underline"></div>
                            <label for="">Name</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="email" type="email" required />
                            <div class="underline"></div>
                            <label for="">Email</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="password" type="password" required />
                            <div class="underline"></div>
                            <label for="">Password</label>
                        </div>
            
                   

                    </div>
                    <button className="btn" type="submit">Sign In</button>

                </form>
            </div>
        </div>
    )
}

export default Form
