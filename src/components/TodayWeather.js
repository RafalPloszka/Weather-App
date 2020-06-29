import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import dayjs from 'dayjs';


const TodayWeather = ({weather, city}) => {
    const {temp, feels_like, pressure, humidity} = weather.main;

    const { lightTheme } = useContext(ThemeContext);
    const theme = !lightTheme ? ' darkmode' : '';
    
    const {speed} = weather.wind;
    const {country} = weather.sys; 


    let icon0;
    weather.weather[0].main === 'Clouds' ? (
        weather.weather[0].id > 802 ? (icon0='Clouds') : (icon0='CloudsSun')
    ) : (
        icon0=weather.weather[0].main
    );

    if (weather.weather[0].icon === '01n') {icon0='Moon'};

    if (weather.weather[0].icon === '02n' || weather.weather[0].icon === '03n') {icon0='MoonClouds'};

    if (weather.weather[0].id >700 && weather.weather[0].id <800) {icon0='Fog'};

    const imageUrl = require(`../icons/${icon0}.png`)


    const date = new Date()
    
    return (

        <div className={"big-card" + (theme)}>
            <div className="text-box">
                <h2>{city}, {country}</h2>
                <span className="time">{dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")} {dayjs(date).format("A")}</span>
                <br/>
                <span className="temp">{Math.round(temp)}°C</span>
                <p>
                Sensed:  {Math.round(feels_like)}°C <br/>
                Wind: {Math.round(speed*3.6)}km/h <br/>
                Pressure: {Math.round(pressure)} hpa<br/>
                Humidity: {Math.round(humidity)}%
                </p>
            </div>
            <div className="icon-box" style={{backgroundImage: `url(${imageUrl})`}}></div>
        </div>             

    )
}

export default TodayWeather
