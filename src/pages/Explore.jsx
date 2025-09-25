import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import FeaturedDestinations from '../components/FeaturedDestinations'
import PopularPackages from '../components/PopularPackages'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/explore.css"; // optional for custom animations

export default function Explore() {
  const [photos, setPhotos] = useState([]);
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=mountains&client_id=${accessKey}&per_page=10`);
        const data = await response.json();
        setPhotos(data.results)
      } catch (error) {
        console.error("Error fetching from Unsplash: ", error);
      }
    };
    fetchImages();
  }, [accessKey]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,             // slower for smooth effect
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",   // smooth easing
    centerMode: true,         // highlight center slide
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <section style={{ margin: "70px 0" }}>
        <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "2rem", fontWeight: "bold" }}>
          Explore Destinations
        </h2>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
          <Slider {...settings}>
            {photos.map((photo) => (
              <div key={photo.id} className="slide-item">
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  className="slider-image"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section>
        <FeaturedDestinations />
      </section>
      <section>
        <PopularPackages />
      </section>
    </>
  )
}
