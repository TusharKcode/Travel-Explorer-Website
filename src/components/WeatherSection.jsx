import React, { useState } from 'react'
import './WeatherSection.css'
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

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
                    <h3>{weather.name}, {weather.sys.country}</h3>
                    <p> <ThermostatIcon/> {weather.main.temp}</p>
                    <p> <CloudIcon/> {weather.weather[0].description}</p>
                    <p> <WaterDropIcon/> Humidity: {weather.main.humidity}</p>
                </div>
            )}
        </div>
    </section>
  )
}
