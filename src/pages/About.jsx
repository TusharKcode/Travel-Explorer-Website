import React from 'react'

export default function About() {
  return (
    <section className='about-section'>
        <div className='max-w-4xl mx-auto p-6 text-center'>
            <h2 className='text-3xl font-bold text-blue-900 mb-4'>About Us</h2>
            <p className='text-gray-700 leading-relaxed'>
                Travel Explorer helps adventurers discover destinations worldwide.
                From Tropical Beaches to Mountain Peaks, we make travel planning easy.
            </p>
            <img 
                src="https://unsplash.com/photos/j0g8taxHZa0/download?force=true&w=800" 
                alt="Travel"
                className='mt-6 rounded-lg shadow-md'
             />
        </div>
    </section>
  )
}
