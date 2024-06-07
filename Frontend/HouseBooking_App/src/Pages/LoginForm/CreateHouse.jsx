import React, { useContext, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function CreateHouse() {
    const [values, setValues] = useState({
        name: '',
        rooms: '',
        detail: '',
        images: null,
        rentPerDay: '',
        address: '',

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

    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("rooms", values.rooms)
        for(let i=0; i<values.images.length;i++){
            formData.append('images',values.images[i])
        }
        formData.append("detail", values.detail)
        formData.append("address", values.address)
        formData.append("rentPerDay", values.rentPerDay)


        try {
            
            const res = await axios.post(
                "http://localhost:5000/api/createHouse",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            ).then(
                setValues({
                    name: '',
                    rooms: '',
                    detail: '',
                    images: null,
                    rentPerDay: '',
                    address: '',

                })
            )
            console.log(res)
            if (res.statusText == 'OK') {
                navigate('/Houses')
            }





        }
        catch (err) {
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
                            <input onChange={(e) => { handleChange(e) }} value={values.rooms} name="rooms" type="text" required />
                            <div class="underline"></div>
                            <label for="">rooms</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.rentPerDay} name="rentPerDay" type="text" required />
                            <div class="underline"></div>
                            <label for="">rentPerDay</label>
                        </div>

                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.detail} name="detail" type="text" required />
                            <div class="underline"></div>
                            <label for="">detail</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.address} name="address" type="text" required />
                            <div class="underline"></div>
                            <label for="">Address</label>
                        </div>
                        <div class="input-data">
                            <input multiple onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files } })} name="images" type="file" accept='image/*' />
                            <div class="underline"></div>

                        </div>

                    </div>




                    <button className="btn" type="submit">CreateHouse</button>

                </form>
            </div>
        </div>
    )
}
export default CreateHouse