import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PulseLoader } from 'react-spinners';

import WeatherCard from "./WeatherCard/component";


const WeatherEngine = ({ location}) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null
  });

  
  const getWeather = async q => {
    setQuery('');
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=ac37df130a289cf08d3615fe79439a23`
      );
      const resJson = await apiRes.json();
      setWeather({
        temp: resJson.main.temp,
        condition: resJson.weather[0].main,
        city: resJson.name,
        country: resJson.sys.country
      });
    } catch (error) {
        setError(true);
    }
    setLoading(false);
  };

  //this hook will render only once the component is mounted and never again. 
  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) { 
    return (
      <LoadingAnimation>
          Input a Valid City Name <br />
          <button onClick={() => setError(false)} style={{marginTop:'15px', height:'25px', width:'60px', alignContent:'center'}}>Reset</button>   
      </LoadingAnimation>
    )
  }

  if (loading) { 
    return (
      <LoadingAnimation>
          <PulseLoader color="red" />
      </LoadingAnimation>
    )
  }

  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        getWeather={getWeather}
      />
    </div>
  )
}

export default WeatherEngine;

const LoadingAnimation = styled.div`
    margin: 0;
    height: 260px;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;
`;