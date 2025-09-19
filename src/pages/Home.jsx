import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import WeatherSection from '../components/WeatherSection';
import PopularPackages from '../components/PopularPackages';
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";


export default function Home(){
  
    return(
        <>
          <HeroSection/>
          <FeaturedDestinations/>
          <WeatherSection/>
          <PopularPackages/>
          <Testimonials/>
          <Newsletter/>
          <Contact/>
        </>
    )
}