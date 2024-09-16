import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookingRow from './BookingListRow';
import './AdminBookingList.css'

function AdminBookingList() {
    const [bookings, setBookings] = useState([]); // Holds the bookings data
    const [error, setError] = useState(null); // Error state
    const [loading, setLoading] = useState(false); // Loading state

    // Fetch bookings on component mount
    useEffect(() => {
        const getBookings = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/bookings');
                setBookings(res.data.bookings);
                console.log(bookings)
            } catch (err) {
                setError('Failed to fetch bookings');
                console.error(err);
            }
        };
        getBookings();
    }, [loading]);

    // Delete booking function
    const deleteBooking = async (id) => {
        try {
            setLoading(true); // Set loading while deleting
            const res = await axios.delete(`http://localhost:5000/api/deleteBooking/${id}`);
            if (res.status === 200) {
                // Filter out the deleted booking from the state
                setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));
                setError(null);
            } else {
                setError('Failed to delete booking');
            }
        } catch (error) {
            setError('Something went wrong while deleting the booking');
            console.error(error);
        } finally {
            setLoading(false); // Stop loading after deletion
        }
    };

    return (
        <div className="bookingListPage">
            <div className='adminEditPageCom'>
                <div className="adminEditPageHeading">
                    Bookings
                </div>

                <div className="adminEditPageRowCom">
                    {loading ? (
                        <div className="loading">...loading</div>
                    ) : bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <div key={booking._id} className="adminEditPageBox">
                                <BookingRow booking={booking} deleteBooking={deleteBooking} />
                            </div>
                        ))
                    ) : (
                        <div className="noEvents">No Bookings Found</div>
                    )}
                </div>

                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
}

export default AdminBookingList;
