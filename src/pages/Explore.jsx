import React, { useState } from 'react'
import { useEffect } from 'react';
import Slider from "react-slick"
import FeaturedDestinations from '../components/FeaturedDestinations'
import PopularPackages from '../components/PopularPackages'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                          //Slider Settings
      const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slideToShow: 3,
        slideToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 2500,
        responsive: [
          { breakpoint: 1280, settings: {slideToShow: 2} },
          { breakpoint: 768, settings: {slideToShow: 1} },
        ],
      };
  return (
    <>
    <section style={{margin:"70px 0"}}>
      <h2 style={{textAlign:"center", margin:"20px 0", fontSize:"2rem", fontWeight:"bold"}}>
        Explore Destinations
      </h2>
      <div style={{maxWidth:"1400px", margin:"0 auto", padding:"0 20px"}}>
        <Slider {...settings}>
          {photos.map((photo) => (
            <div key={photo.id} style={{padding:"0 10px"}}>
              <img 
                src={photo.urls.small} 
                alt={photo.alt_description} 
                style={{width:"100%", height:"400px", objectFit:"cover", borderRadius:"12px"}}
              />
            </div>
        ))}
        </Slider>
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
