import React, {useState, useContext} from 'react';
import axios from 'axios';
import '../App.css';

import Header from './Header';
import CitySearch from './CitySearch';
import TodayWeather from './TodayWeather';
import ToggleTheme from './ToggleTheme';
import Error from './Error';

const Main = () => {

  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [error, setError] = useState(null)


  const api_call = async e => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const API_KEY = "5d4b040d238a8331a9bc42feba775440";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    
    let response=null

    try {
      response = await axios.get(url);    
      setCity(response.data.name);
      setWeather(response.data);
      setError(null);
    }
    catch (err) {
      console.log(err)
      setError('Location not found')
      setWeather(null)
    }
  }

  return (
      <div>
        <Header />
        
        <CitySearch
          api_call={api_call}
          city={city}
        />
            
        {error &&
        <Error error={error}/>
        }

        {weather && 
        <div className="content">
          <TodayWeather 
          api_call={api_call}
          weather={weather} 
          city={city}
          error={error}
          />
        </div> 
        }
            
        <ToggleTheme />
      </div>
  )
}

export default Main

