import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "../styles/BookingPage.css";
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import Skeleton from '@mui/material/Skeleton';

export default function BookingPage() {

    const { id } = useParams();
    const [pkg ,setPkg] = useState(null);
    const [loading, setLoading] = useState(true);

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
            }
        };
        fetchPackage();
    }, [id]);

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
                        <p className='rating'> <StarOutlineSharpIcon/> {pkg.rating}</p>
                        <p className='desc'>
                            Experience an unforgettable journey with our {pkg.name} package.
                            Explore beautiful destinations, enjoy comfort stays and make lasting memories.
                        </p>
                        <button className='confirm-btn'>Confirm Booking</button>
                    </div>
                </div>
            )
        )}
    </section>
  )
}
