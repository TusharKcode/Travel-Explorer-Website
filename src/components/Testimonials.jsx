import React, { useEffect, useState } from 'react'
import '../styles/Testimonials.css'
import Skeleton from '@mui/material/Skeleton';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

export default function Testimonials() {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("/data/testimonials.json");
                const data = await res.json();
                setReviews(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load testimonials: ", error)
            }
        };
        fetchReviews();
    }, []);

  return (
    <section className='testimonials-section' id='testimonials'>
        <h2 className='section-title' data-aos='fade-up'>
            What Our Travelers Say
        </h2>
        <div className='testimonials-grid'>
            {loading
                ? Array.from({length: 3}).map((_, i) => (
                    <div key={i} className='testimonials-card'>
                        <Skeleton variant='circular' width={70} height={70} style={{margin:"0 auto 15px"}}/>
                        <Skeleton width="60%" height={28} style={{margin:"0 auto"}}/>
                        <Skeleton width="80%" height={20} style={{margin:"15px auto"}}/>
                        <Skeleton width="70%" height={20} style={{margin:"0 auto"}}/>
                        <div style={{display:"flex", justifyContent:"center", gap:"5px", marginTop:"15px"}}>
                            {Array.from({length: 5}).map((_, j) => (
                                <Skeleton key={j} variant='circular' width={20} height={20} style={{margin:"0 auto"}}/>
                            ))}
                        </div>
                    </div>
                )) 
                : reviews.map((review, index) => (
                    <div
                        key={review.id}
                        className='testimonials-card'
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        data-aos-delay={index * 200}
                    >
                        <img 
                            src={review.image} 
                            alt={review.name}
                            className='testimonials-img'
                        />
                        <h3>{review.name}</h3>
                        <p className='review-text'>"{review.text}"</p>
                        <div className='stars'>
                            {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                                <StarOutlineSharpIcon key={i} className='star-icon'/>
                            ))}
                        </div>
                    </div>
            ))}
        </div>
    </section>
  )
}
