import React, { useState, useEffect } from "react";

export const SearchWeather = () => {
    const [update, setUpdate] = useState('')

    const [data, setData] = useState([]);

    let cityName = setUpdate

    let url = 'api.openweathermap.org/data/2.5/weather?q='+{cityName}+'&appid=750f844a271e6a0e4d5caf0107a40189';

    const Fetching =() =>{
        useEffect(() => {
            fetch(url)
                .then((response) => {
                    return response.json()
                    console.log(response)
                })
                .then( response => setData => {
                    console.log('setData', setData)
                })
    
        })    
    }

    return (
        <div className="main">
            <label>City Name</label>
            <input placeholder="City name" type='text' id='city' onChange={element => setUpdate(element.target.value)} />
            <button type="button" onClick={() => Fetching() }>Show Weather</button>

        </div>
    )
}