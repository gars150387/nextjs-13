import React from "react";

export const Weather = (props) =>{
    return (
        <div className="weather">
            <h1 id="weather">City Name: {props.city}</h1>
            <div id="weatherCity">Weather Description: {props.weather}</div>
            <div id="weatherTempurate">Weather Temperute: {props.main}</div>
        </div>
    )
}