import React from 'react'
import './Contact.css'
import PushPinIcon from '@mui/icons-material/PushPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default function Contact() {
  return (
    <section className='contact-section' id='contact'>
        <div className='contact-container' data-aos='zoom-in'>
            <h2 className='contact-title'>Get in Touch</h2>
            <p className='contact-subtitle'>Have questions or need help planning your trip? Drop ua a message!</p>
            <div className='contact-grid'>
                
                {/* Contact Form */}
                <form className='contact-form'>
                    <input type="text" placeholder='Your Name' required/>
                    <input type="email" placeholder='Your Email' required/>
                    <textarea placeholder='Your Message' rows='5' required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
                
                {/* Contact Info */}
                <div className='contact-info'>
                    <h3>Contact Information</h3>
                    <p> <PushPinIcon/> 123 Travel Street, Adventure City</p>
                    <p> <LocalPhoneIcon/> +91 9XXXXXXXXX</p>
                    <p> <MailIcon/> support@travelexplorer.com</p>
                </div>

            </div>
        </div>
    </section>
  )
}
