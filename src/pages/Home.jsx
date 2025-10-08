import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import WeatherSection from '../components/WeatherSection';
import PopularPackages from '../components/PopularPackages';
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Contact2 from "../components/Contact2";
import FAQSection from '../components/FAQSection';


export default function Home(){
  
    return(
        <>
          <HeroSection/>
          <FeaturedDestinations/>
          <WeatherSection/>
          <PopularPackages/>
          <Testimonials/>
          <Newsletter/>
          <Contact2/>
          <FAQSection/>
        </>
    )
}