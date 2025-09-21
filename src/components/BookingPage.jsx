import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "../styles/BookingPage.css";
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';

export default function BookingPage() {

    const { id } = useParams();
    const [pkg ,setPkg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [alert, setAlert] = useState(null);

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
        } else{
            setAlert({type:"success", message:"Booking successful! We'll contact you shortly"});
            e.target.reset();
            setShowForm(false);
        }
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
    </section>
  )
}
