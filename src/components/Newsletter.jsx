import React, { useEffect, useState } from 'react'
import '../styles/Newsletter.css'
import Skeleton from '@mui/material/Skeleton';

export default function Newsletter() {

    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState({title: "", text: ""});

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch("/data/newsletter.json");
                const data = await res.json();
                setContent(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load newsletter content: ", error);
            }
        };
        fetchContent();
    }, []);

  return (
    <section className='newsletter-section' id='newsletter'>
      <div className='newsletter-container' data-aos='fade-up'>
        {loading ? (
          <>
            <Skeleton width="70%" height={40} style={{ margin: "0 auto 15px" }} />
            <Skeleton width="90%" height={20} style={{ margin: "0 auto 25px" }} />
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
              <Skeleton variant="rectangular" width={250} height={48} />
              <Skeleton variant="rectangular" width={120} height={48} />
            </div>
          </>
        ) : (
          <>
            <h2 className='newsletter-title'>
              {content.title}
            </h2>
            <p className='newsletter-text'>
              {content.text}
            </p>

            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder='Enter your email'
                className="newsletter-input" 
                required 
              />
              <button type='submit' className='newsletter-btn'>Subscribe</button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
