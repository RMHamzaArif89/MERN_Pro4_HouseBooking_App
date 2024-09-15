import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './users.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons

function HouseOwn() {
    const users = useLoaderData();

    return (
        <div className="users-container">
            <div className="users-con">
                <div className="users-heading">
                    <div className="name"><FaUser /> Name</div>
                    <div className="email"><FaEnvelope /> Email</div>
                    <div className="password"><FaLock /> Password</div>
                </div>
                {users.map((user) => (
                    <div key={user._id} className='users-row'>
                        <div className="user-name"><FaUser /> {user.name}</div>
                        <div className="user-email"><FaEnvelope /> {user.email}</div>
                        <div className="user-password"><FaLock /> {user.password}</div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default HouseOwn;




    //get orders data
  export const UserLoader=async()=>{

      const response=await fetch('http://localhost:5000/api/users',{
        method:'GET',
    
    })
    const res=await response.json()
    if(response.ok){
      return res.data
      
    }
 
  }
