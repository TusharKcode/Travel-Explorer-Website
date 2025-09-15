import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            {/* Brand */}
            <div className='footer-brands' data-aos='fade-up'>
                <h2>Travel Explorer</h2>
                <p>Your gateway to unforgettable journeys</p>
            </div>
            {/* Quick Links */}
            <div className='footer-links' data-aos='fade-up' data-aos-delay='200'>
                <h3>Quick Links</h3>
                <ul>
                    <li href='./HeroSection.jsx'>Home</li>
                    <li href='#destinations'>Destinations</li>
                    <li href='#packages'>Packages</li>
                    <li href='#contact'>Contact</li>
                </ul>
            </div>
            {/* Social Media */}
            <div className='footer-social' data-aos='fade-up' data-aos-delay='400'>
                <h3>Follow Us</h3>
                <div className='social-icons'>
                    <a href="#"> <FacebookIcon/> </a>
                    <a href="#"> <XIcon/> </a>
                    <a href="#"> <InstagramIcon/> </a>
                    <a href="#"> <LinkedInIcon/> </a>
                </div>
            </div>
            {/* Bottom */}
            <div className='footer-bottom'>
                <p>© {new Date().getFullYear()} TravelExplorer. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}
