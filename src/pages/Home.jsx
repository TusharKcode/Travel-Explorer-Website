import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import WeatherSection from '../components/WeatherSection';
import PopularPackages from '../components/PopularPackages';
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";

export default function Home(){
  useEffect(() => {
    AOS.init({duration: 1000, once: true})
  })
    return(
        <>
          <Navbar/>
          <HeroSection/>
          <FeaturedDestinations/>
          <WeatherSection/>
          <PopularPackages/>
          <Testimonials/>
        </>
    )
}