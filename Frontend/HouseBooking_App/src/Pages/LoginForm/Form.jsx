import React, { useContext, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
    const [values, setValues] = useState({
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
      formData.append("password",values.password)


    try{
       const res=await axios.post(
            "http://localhost:5000/api/createItems",
            formData,{
            headers:{
              "Content-Type":"multipart/form-data"
            }
            }
            ).then(
                setValues({
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
                <form onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
                    <div class="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="email" type="email" required />
                            <div class="underline"></div>
                            <label for="">Email</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="password" type="password" required />
                            <div class="underline"></div>
                            <label for="">Name</label>
                        </div>
            
                   

                    </div>
                    <button className="btn" type="submit">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
