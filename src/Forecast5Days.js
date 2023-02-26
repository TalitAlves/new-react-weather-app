import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import { ThreeDots } from 'react-loader-spinner'


export default function Forecast5Days (props){
 
const[status, setStatus]=useState(false);
const [forecast, setForecast]=useState("")

    useEffect(()=> {
        setStatus(false)
      },[props.coordinates] );

    function handleForecast(response){
        setForecast(response.data.daily)
        setStatus(true)
        console.log(response)

    }


if(status){

    return(
        <div>
            <div className="next-days"> Next 5 days</div>
              <div className="forecast-days"> 
              {forecast.map(function(dailyForecast, index){
                if(index>0 & index<6){
                    return (< ForecastDay dataForecast={dailyForecast}/>)
                } else{ return("")}

                })} 
                    
                </div> 
        </div>
    )}else{
        let key = "40430ba55fc1o6890ct12a8363f6d64d";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}`;
        axios.get(apiURL).then(handleForecast);
        
        return(<div className="loader">
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