import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import "../styles/BookingPage.css";
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function BookingPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [pkg ,setPkg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [alert, setAlert] = useState(null);

    const [confirmation, setConfirmation] = useState(null);
    const [loginDialog, setLoginDialog] = useState(false);

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const res = await fetch("/data/popularPackages.json");
                const data = await res.json();
                const selected = data.find((p) => p.id === parseInt(id));

                setPkg(selected);
                setLoading(false);

            } catch (error) {
                console.error("Failed to fetch booking details:", error);
                setAlert({ type:"error", message:"Failed to fetch booking details!"})
            }
        };
        fetchPackage();
    }, [id]);

    // Auto Close Alerts
    useEffect(() => {
        if(alert){
            const timer = setTimeout(() => {
                setAlert(null);

            }, 3000);
            return () => clearTimeout(timer);
        }
    },[alert]);

    const handleConfirmClick = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(!user){

            //not Logged In -> go to login
            setLoginDialog(true);
            return;
        }
        setShowForm(true);
    }

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const date = formData.get("date");
        const people = formData.get("people");

        if(!name || !email || !date || !people){
            setAlert({type:"warning", message:"Please fill in all fields before proceeding for booking."});
            return;
        } 

        // Generate Booking ID
        const bookingId = "BK" + Date.now();

        // Saving Booking in Local Storage
        const newBooking = {id: bookingId, name, email, date, people, package: pkg};
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        existingBookings.push(newBooking);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

        setAlert({type:"success", message:"Booking successful!"});
        setConfirmation(newBooking);

        e.target.reset();
        setShowForm(false);
    };

    
  return (
    <section className='booking-section' data-aos='fade-up'>
        {loading ? (
            <div className='booking-card'>
                <Skeleton variant='rectangular' width="100%" height={250}/>
                <Skeleton width="60%" height={40}/>
                <Skeleton width="40%"/>
                <Skeleton width="30%"/>
                <Skeleton width="80%" height={50}/>
            </div>
        ) : (
            pkg && (
                <div className='booking-card'>
                    <div className='booking-left'>
                        <img src={pkg.image} alt={pkg.name} className='booking-img'/>
                    </div>
                    <div className='booking-right'>
                        <h2>{pkg.name}</h2>
                        <p className='duration'>{pkg.duration}</p>
                        <p className='price'>{pkg.price}</p>
                        <p className='rating'> 
                            <Rating name="package-rating" value={pkg.rating} precision={0.5} readOnly/> 
                            <span>{pkg.rating}</span>
                        </p>
                        <p className='desc'>
                            Experience an unforgettable journey with our {pkg.name} package.
                            Explore beautiful destinations, enjoy comfort stays and make lasting memories.
                        </p>

                        {/* Alert Message */}
                        {alert && (
                            <Alert variant='outlined' severity={alert.type} style={{marginBottom:"1rem"}}>
                                {alert.message}
                            </Alert>
                        )}
                        
                        {!showForm ? (
                            <button className='confirm-btn' onClick={handleConfirmClick}>
                                Confirm Booking
                            </button>
                        ) : (
                            <form className="booking-form" onSubmit={handleBookingSubmit}>
                                <h3>Booking Details</h3>
                                <input type="text" name='name' placeholder='Full Name' required/>
                                <input type="email" name='email' placeholder='Email Address' required/>
                                <input type="date" name='date' required/>
                                <input type="number" name='people' placeholder='Number of People' min="1" required/>
                                <button type='sumit' className='submit-btn'>Submit Booking</button>
                            </form>
                        )}
                    </div>
                </div>
            )
        )}

        {/* Toast-style Alerts */}
        <Snackbar 
            open={!!alert}
            autoHideDuration={3000}
            onClose={() => setAlert(null)}        
            anchorOrigin={{vertical:"top", horizontal:"right"}}
        >
            {alert && (
                <Alert
                    severity={alert.type}
                    variant='filled'
                    onClose={() => setAlert(null)}
                >
                    {alert.message}
                </Alert>
            )}
        </Snackbar>

        {/* Confirmation Modal */}
        <Dialog open={!!confirmation} onClose={() => setConfirmation(null)}>
            <DialogTitle>Booking Confirmed</DialogTitle>
            <DialogContent dividers>
                <p><b>Booking ID:</b> {confirmation?.id}</p>
                <p><b>Name:</b> {confirmation?.name}</p>
                <p><b>Email:</b> {confirmation?.email}</p>
                <p><b>Date:</b> {confirmation?.date}</p>
                <p><b>People:</b> {confirmation?.people}</p>
                <p><b>Package:</b> {confirmation?.package?.name}</p>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setConfirmation(null)}
                    variant="conatined"
                    color="primary"
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>

        {/* Login required Dialog */}
        <Dialog 
            open={loginDialog}
            onClose={() => setLoginDialog(false)}
        >
            <DialogTitle>Login Required</DialogTitle>
            <DialogContent>
                <p>You must be logged in to confirm a booking.</p>
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={() => setLoginDialog(false)}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        setLoginDialog(false);
                        navigate("/login")
                    }}
                    variant='contained'
                    color='primary'
                >Go to Login</Button>
            </DialogActions>
        </Dialog>
    </section>
  )
}