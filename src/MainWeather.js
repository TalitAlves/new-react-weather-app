import React from "react";
import axios from 'axios';
import { useState } from "react";
import FormatedDate from "./FormatedDate";
import Forecast5Days from "./Forecast5Days";
import { ThreeDots } from 'react-loader-spinner'



export default function MainWeather(props){

    const[status, setStatus] = useState(false);
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState(props.defaultCity);

   
    function handleResponse(response){
         setWeather({
            coordinates: response.data.coordinates,
            city:response.data.city,
            country: response.data.country,
            date: new Date(response.data.time*1000),
            temperature: response.data.temperature.current,
            feelsLike: response.data.temperature.feels_like,
            humidity:  response.data.temperature.humidity,
            wind:  response.data.wind.speed,
            description: response.data.condition.description,
            icon: response.data.condition.icon_url
       })
        setStatus(true)
        console.log(response)
    }

    function search(){
        const apiKey = "40430ba55fc1o6890ct12a8363f6d64d";
        const apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metrics`;
        axios.get(apiURL).then(handleResponse);
        
    }

    function handleForm(event){
        event.preventDefault()
        search()

    }

    function handleCityname(event){
        setCity(event.target.value)
      
    }

if(status){
      return(
        
        <div className="container">
            
            <form onSubmit={handleForm} >
                <input type="text" placeholder="Search a city" onChange={handleCityname} autoFocus="on"></input>
                <button type="submit">Search</button>
            </form>



            <div className="heading">
            <div className="date-city-data"> 
                <div className="date">
                    <FormatedDate date={weather.date}/>
                </div>
                <div className="city-name">
                    Today in {weather.city}, {weather.country}
                </div>
            
            </div>
                <div className="main-icon">
                <img alt="sol" src={weather.icon}></img>
                
                </div>
            <div className="aditional-information">
                
                <div className="temperature">{Math.round(weather.temperature)}°C </div>
                <div className="feels-like" id="description">{weather.description}</div>
                <div className="feels-like">Humidity: {weather.humidity}%</div>
                <div className="feels-like">Wind: {weather.wind}km/h</div>
                <div className="feels-like">Feels Like: {weather.feelsLike}°C</div>
            </div>
        </div>
            <div className="forecast-info">
                <Forecast5Days coordinates={weather.coordinates}/>
            </div>

        </div>)
} else{

    search()
    return(
        <div className="loader">
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#13547a" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true} />
            </div>);
}

  
}