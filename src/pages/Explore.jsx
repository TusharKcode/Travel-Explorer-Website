import React, { useState } from 'react'
import { useEffect } from 'react';
import FeaturedDestinations from '../components/FeaturedDestinations'
import PopularPackages from '../components/PopularPackages'

export default function Explore() {
  const[photos, setPhotos] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

      useEffect(() => {
          const fetchImages = async () =>{
              try {
                  const response = await fetch(`https://api.unsplash.com/search/photos?query=mountains&client_id=${accessKey}`);
                  const data = await response.json();
                  console.log("Unsplash API results: ", data.results);
                  setPhotos(data.results)
              } catch (error) {
                  console.error("Error fetching from Unsplash: ", error);
              }
          };
          fetchImages();
      }, [accessKey]);
  return (
    <>
    <section>
      <h2 style={{textAlign:"center", margin:"20px 0"}}>Explore Destinations</h2>
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",
          gap:"15px",
          padding:"20px"
        }}
        >
        {photos.map((photo) => (
          <img 
          key={photo.id}
          src={photo.urls.small} 
          alt={photo.alt_description} 
          style={{width:"100%", borderRadius:"10px"}}
          />
        ))}
      </div>
    </section>

    <section>
      <FeaturedDestinations/>
    </section>
    <section>
      <PopularPackages/>
    </section>
  </>
  )
}
