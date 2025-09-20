import React from 'react'
import '../styles/Contact.css'
import PushPinIcon from '@mui/icons-material/PushPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from 'react';


export default function Contact() {

    const [loading, setLoading] = useState(true);
    const [contactData, setContactData] = useState(null);

    useEffect(() => {
      const fetchContact = async () => {
        try {
            const res = await fetch("/data/contact.json");
            const data = await res.json();
            setContactData(data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to load conatct data: ", error);
        }
      };
      fetchContact();
    }, []);
    

  return (
    <section className='contact-section' id='contact'>
        <div className='contact-container' data-aos='zoom-in'>
            {loading ? (
          <>
            <Skeleton width="40%" height={40} style={{ margin: "0 auto 15px" }} />
            <Skeleton width="60%" height={20} style={{ margin: "0 auto 30px" }} />
            <div className='contact-grid'>
              {/* Skeleton for form */}
              <div>
                <Skeleton variant="rectangular" height={50} style={{ marginBottom: "15px" }} />
                <Skeleton variant="rectangular" height={50} style={{ marginBottom: "15px" }} />
                <Skeleton variant="rectangular" height={120} style={{ marginBottom: "15px" }} />
                <Skeleton variant="rectangular" height={50} />
              </div>
              {/* Skeleton for info */}
              <div>
                <Skeleton width="60%" height={25} style={{ marginBottom: "20px" }} />
                <Skeleton width="80%" height={20} style={{ marginBottom: "10px" }} />
                <Skeleton width="70%" height={20} style={{ marginBottom: "10px" }} />
                <Skeleton width="75%" height={20} />
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className='contact-title'>{contactData.title}</h2>
            <p className='contact-subtitle'>{contactData.subtitle}</p>
            <div className='contact-grid'>
              {/* Contact Form */}
              <form className='contact-form'>
                <input type="text" placeholder='Your Name' required />
                <input type="email" placeholder='Your Email' required />
                <textarea placeholder='Your Message' rows='5' required></textarea>
                <button type='submit'>Send Message</button>
              </form>

              {/* Contact Info */}
              <div className='contact-info'>
                <h3>{contactData.infoTitle}</h3>
                <p> <PushPinIcon /> {contactData.address}</p>
                <p> <LocalPhoneIcon /> {contactData.phone}</p>
                <p> <MailIcon /> {contactData.email}</p>
              </div>
            </div>
          </>
        )}
        </div>
    </section>
  )
}
