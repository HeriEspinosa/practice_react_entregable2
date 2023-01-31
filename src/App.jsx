import { useEffect, useState } from 'react'
import './CSS/App.css'
import axios from 'axios';
import WeatherCard from './Components/WeatherCard';
import Loading from './Components/Loading';

function App() {
  const [coords, setCoords] = useState();
  const [weather, SetWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const APIkey = 'f450c4c1589803de11bb22bc100d906b'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=${APIkey}`

      axios.get(url)
        .then(res => {
          SetWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
          }
          setTemperature(obj)
        })

        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [coords])

  return (
    <div className="App">
      {
        isLoading ?
          <Loading />
          :
          <WeatherCard
            weather={weather}
            temperature={temperature}
          />
      }
      <div className='hr__code'>
        <a href="https://github.com/HeriEspinosa/repo_react_entregable2.git" target='blank'><p>Hecha un Vistazo a mi Codigo <span>Aqui</span></p></a>
      </div>
    </div>
  )
}

export default App
