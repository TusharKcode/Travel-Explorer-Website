import React from 'react'
import '../styles/Newsletter.css'

export default function Newsletter() {
  return (
    <section className='newsletter-section' id='newsletter'>
        <div className='newsletter-container' data-aos='fade-up'>
            <h2 className='newsletter-title'>
                Stay Updated with Travel Explorer
            </h2>
            <p className='newsletter-text'>
                Subscribe to get the latest travel deals, tips, and destination ideas directly to your inbox.
            </p>

            <form className="">
                <input 
                    type="email" 
                    placeholder='Enter your email'
                    className="newsletter-input" 
                    required 
                />
                <button type='submit' className='newsletter-btn'>Subscribe</button>
            </form>
        </div>
    </section>
  )
}
