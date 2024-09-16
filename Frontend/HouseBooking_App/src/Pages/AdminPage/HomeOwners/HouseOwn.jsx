import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import './users.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function HouseOwn() {
    const initialUsers = useLoaderData(); // Get initial users from loader
    const [users, setUsers] = useState(initialUsers); // Manage users state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Delete user function
    const deleteUser = async (Id) => {
        try {
            setLoading(true);
            const res = await axios.delete(`http://localhost:5000/api/deleteUser/${Id}`);
            
            if (res.status !== 200) {
                setError(res.data.message || 'Failed to delete user');
                return;
            }

            setError(null);
            console.log('User deleted successfully');
            
            // Update the users state by removing the deleted user
            setUsers((prevUsers) => prevUsers.filter(user => user._id !== Id));
        } catch (e) {
            setError('Something went wrong while deleting the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="users-container">
            <div className="users-con">
                <div className="users-heading">
                    <div className="name"><FaUser /> Name</div>
                    <div className="email"><FaEnvelope /> Email</div>
                    <div className="password"><FaLock /> Password</div>
                </div>
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    users.length > 0 ? (
                        users.map((user) => (
                            <div key={user._id} className="users-row">
                                <div className="user-name"><FaUser /> {user.name}</div>
                                <div className="user-email"><FaEnvelope /> {user.email}</div>
                                <div className="user-password"><FaLock /> {user.password}</div>
                                <div className="adminEditPageBtns">
                                    <div className="adminEventsDelete adminEditPageIcon" onClick={() => deleteUser(user._id)}>
                                        <MdDelete />
                                    </div>
                                    <div className="adminEventsEdit adminEditPageIcon">
                                        <FaEdit />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No users found</div>
                    )
                )}
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
}

export default HouseOwn;

// Data loader function
export const UserLoader = async () => {
    const response = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
    });
    const res = await response.json();
    if (response.ok) {
        return res.data;
    } else {
        throw new Error('Failed to load users');
    }
};
