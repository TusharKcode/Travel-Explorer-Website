import React from 'react'
import './PopularPackages.css'
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';

export default function PopularPackages() {

    const packages = [
        {
            id: 1,
            name:"Bali Escape",
            duration:"7D / 6N",
            image:"https://unsplash.com/photos/U6t80TWJ1DM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU3NzY1NzEwfA&force=true&w=640",
            price:"₹25000",
            rating: 4.8
        },
        {
            id: 2,
            name:"Switzerland Adventure",
            duration:"10D / 9N",
            image:"https://unsplash.com/photos/TP8c1dhUPHk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8c3dpdHplcmxhbmQlMjBhZHZlbnR1cmV8ZW58MHx8fHwxNzU3NzY5MTc3fDA&force=true&w=640",
            price:"₹80000",
            rating: 4.9
        },
        {
            id: 3,
            name:"Dubai Luxury",
            duration:"5D / 4N",
            image:"https://unsplash.com/photos/CK9BTsQ-I1Y/download?force=true&w=640",
            price:"₹55000",
            rating: 4.7
        }
    ]
  return (
    <section className='packages-section' data-aos='fade-up'>
        <h2 className='section-title'><FlightTwoToneIcon color='info'/>Popular Packages</h2>
        <div className='packages-grid'>
            {packages.map((pkg, index) => (
                <div 
                    key={pkg.id} 
                    className='package-card'
                    data-aos='zoom-in'
                    data-aos-delay={index * 200}
                >
                    <img src={pkg.image} alt={pkg.name} className='package-img'/>
                    <div className='package-content'>
                        <h3>{pkg.name}</h3>
                        <p>{pkg.duration}</p>
                        <p className='price'>{pkg.price}</p>
                        <p> <StarOutlineSharpIcon/> {pkg.rating}</p>
                        <button className='book-btn'>Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
