import React from 'react'
import '../styles/Testimonials.css'
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johanson",
            text: "My Bali trip was unforgettable! Everything was well organised and smooth. Highly recommend Travel Explorer.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5
        },
        {
            id: 2,
            name: "David Williams",
            text: "Switzerland packge was amazing! The guides were friendly and the destinations were breathtaking.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4.7
        },
        {
            id: 3,
            name: "Emily Brown",
            text: "Loved the Dubai Luxury package! Hotels were top-notch and the entire trip was a 5-star experience.",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 4.6
        }
    ]
  return (
    <section className='testimonials-section' id='testimonials'>
        <h2 className='section-title' data-aos='fade-up'>
            What Our Travelers Say
        </h2>
        <div className='testimonials-grid'>
            {reviews.map((review, index) => (
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
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <StarOutlineSharpIcon key={i} className='star-icon'/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
