import React, { useEffect, useState } from 'react'
import '../styles/PopularPackages.css'
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';

export default function PopularPackages() {

    const [loading, setLoading] = useState(true);
    const [packages,setpackages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetch("/data/popularPackages.json")
                const data = await res.json();
                setpackages(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load Packages: ", error)
            }
        };
        fetchPackages();
    }, []);

  return (
    <section className='packages-section' data-aos='fade-up'>
        <h2 className='section-title'>
            <FlightTwoToneIcon color='info'/> Popular Packages
        </h2>
        <div className='packages-grid'>
            {loading 
                ? Array.from({length: 3}).map((_, i) => (
                    <div key={i} className='packages-card'>
                        <Skeleton variant='rectangular' width="100%" height={200}/>
                        <div className='packages-content'>
                            <Skeleton width="60%" height={28}/>
                            <Skeleton width="40%"/>
                            <Skeleton width="50%"/>
                            <Skeleton width="30%"/>
                            <Skeleton variant='rounded' width="80%" height={36}/>
                        </div>
                    </div>
            ))
        : packages.map((pkg, index) => (
            <div
                key={pkg.id}
                className='packages-card'
                data-aos="zoom-in"
                data-aos-delay={index*200}
            >
                <img src={pkg.image} alt={pkg.name} className='packages-img'/>
                <div className='packages-content'>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.duration}</p>
                    <p className='price'>{pkg.price}</p>
                    <p>
                        <StarOutlineSharpIcon/> {pkg.rating}
                    </p>
                    <button 
                        className='book-btn'
                        onClick={() => navigate(`/book/${pkg.id}`)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        ))
        }
        </div>
    </section>
  )
}
