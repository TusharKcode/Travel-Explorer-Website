import React, { useState } from 'react'
import '../styles/WeatherSection.css'
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import GrainIcon from '@mui/icons-material/Grain';

export default function WeatherSection() {
    
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        if(!city) return;
        try {
            const apiKey = "82e83fe4112f28e50d61b006d1efbda4";
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            )
            const data = await res.json()
            if (data.cod === 200) {
                setWeather(data);
            } else {
                setWeather(null);
                alert("City not found!")
            }
        } catch (error) {
            console.error(error)
        }
    };

    const getWeatherIcon = (condition) => {
        switch(condition){
            case "Clear":
                return <WbSunnyTwoToneIcon fontSize='large' color='warning'/>
            case "Clouds":
                return <CloudIcon fontSize='large' color='action'/>
            case "Rain":
                return <WaterDropIcon fontSize='large' color='primary'/>
            case "Snow":
                return <AcUnitIcon fontSize='large' color='info'/>
            case "Thunderstorm":
                return <ThunderstormIcon fontSize='large' color='error'/>
            case "Drizzle":
                return <GrainIcon fontSize='large' color='primary'/>
            case "Mist":
            case "Fog":
            case "Haze":
                return <GrainIcon fontSize='large' color='disabled'/>
            default:
                return <CloudIcon fontSize='large'/>
        }
    }


  return (
    <section className='weather-section'>
        <div className='weather-container'>
            <h2 className='weather-title'>
               <WbSunnyTwoToneIcon fontSize='large'/> Check Weather of your favourite destination
            </h2>

            {/* Search Input */}
            <div className='weather-search'>
                <input 
                    type="text" 
                    placeholder='Enter city name...'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather}>Search</button>
            </div>

            {/* Weather result */}
            {weather && (
                <div className='weather-card'>
                    <h3 style={{fontWeight:"bold", fontSize:"20px"}}>{weather.name}, {weather.sys.country}</h3>
                    <p> <ThermostatIcon color='error'/> {weather.main.temp}°C</p>
                    <p> {getWeatherIcon (weather.weather[0].main)} {" "}
                        {weather.weather[0].description.charAt(0).toUpperCase() + 
                         weather.weather[0].description.slice(1)}
                    </p>
                    <p> <WaterDropIcon color='info'/> Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    </section>
  )
}
