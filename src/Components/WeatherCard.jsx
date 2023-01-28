import React, { useState } from 'react'
import '../CSS/WeatherCard.css'

const WeatherCard = ({ weather, temperature }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const handleClick = () => setIsCelsius(!isCelsius)

    return (
        <section className='main'>

            <article className="weather">
                <div className="header__weather">
                    <h1>Weather App</h1>
                    <h3>{weather?.name}, {weather?.sys.country}</h3>
                </div>
                
                <div className="container__weather">
                    <img className='weather__nubes' src="/Gifnubes.gif" alt="" />
                    <div className="weather__img">
                        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                    <div className="weather__info">
                        <h3>"{weather?.weather[0].description}"</h3>
                        <ul>
                            <li><span>Wind Speed: </span>{weather?.wind.speed}m/s</li>
                            <li><span>Clouds: </span>{weather?.clouds.all}%</li>
                            <li><span>Pressure: </span>{weather?.main.pressure}hPa</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__weather">
                    <h2>{isCelsius ? temperature?.celsius + " °C" : temperature?.farenheit + " °F"}</h2>
                    <button onClick={handleClick}>Change to {isCelsius ? '°F' : '°C'}</button>
                </div>
            </article>
        </section>
    )

}
export default WeatherCard