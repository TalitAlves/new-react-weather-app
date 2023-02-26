import React from "react";


export default function ForecastDay(props){

    function date(){
    let date = new Date(props.dataForecast.time*1000);
    let day = date.getDay();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDay[day];
    
   }
 
    return(
        <div className="days">
            <div className="forecast-date">{date()}</div>
            
            <div className="forecast-icon"> <img alt="sol" src={props.dataForecast.condition.icon_url}></img></div>
            <div className="forecast-temperature">{Math.round(props.dataForecast.temperature.day)}°C</div>
            <div id="description">{props.dataForecast.condition.description}</div>
            <div><span className="max">{Math.round(props.dataForecast.temperature.maximum)}°C </span>|
            <span className="min">{" "}  
                 {Math.round(props.dataForecast.temperature.minimum)}°C</span>
            </div>

          </div>


    )

}