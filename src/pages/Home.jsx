import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturedDestinations from '../components/FeaturedDestinations'
import WeatherSection from '../components/WeatherSection'

export default function Home(){
    return(
        <>
          <Navbar/>
          <HeroSection/>
          <FeaturedDestinations/>
          <WeatherSection/>
        </>
    )
}