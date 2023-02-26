import React from "react";

export default function FormatedDate(props){

let dayName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;
let monthName=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];   
let date = props.date.getDate();
let day = dayName[props.date.getDay()];
let month = monthName[props.date.getMonth()];


    return(
        <div>
            {day},{" "}  
            {date} of {month}
            
        </div>
    )
}