import React, { useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setValues((pre) => ({
            ...pre, [name]: val
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/loginUser",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            // If the login is successful and the response contains the token
            console.log(res)
            if (res.statusText=='OK') {
                const token = res.data.token;
                localStorage.setItem('token', token); // Store token in localStorage
                
                // Display success toast
                toast.success('Login successful! Redirecting...', {
                    position: 'top-center'
                });

                // Redirect after a short delay to show the toast, and refresh the page
                setTimeout(() => {
                    window.location.href = '/createHouse';  // Navigate to createHouse and refresh
                }, 2000); // 2-second delay to allow the toast message to be displayed

            } else {
                // If login fails, display an error toast
                toast.error('Login failed. Please check your credentials.', {
                    position: 'top-center'
                });
            }
        } catch (err) {
            console.error(err);
            // Handle error response and display a toast message
            toast.error('An error occurred during login. Please try again.', {
                position: 'top-center'
            });
        }
    };

    return (
        <div className="form-con">
            <div className="container">
                <div className="text">
                    Add the Item
                </div>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="form-row">
                        <div className="input-data">
                            <input onChange={handleChange} value={values.email} name="email" type="email" required />
                            <div className="underline"></div>
                            <label>Email</label>
                        </div>
                        <div className="input-data">
                            <input onChange={handleChange} value={values.password} name="password" type="password" required />
                            <div className="underline"></div>
                            <label>Password</label>
                        </div>
                    </div>
                    <button className="btn" type="submit">Login</button>
                </form>
            </div>

            {/* ToastContainer to show the toast messages */}
            <ToastContainer />
        </div>
    );
}

export default Login;
