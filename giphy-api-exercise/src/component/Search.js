import React, { useState, useEffect } from "react";

export const SearchWeather = () => {
    const [setUpdate] = useState('')

    const [data, setData] = useState([]);
    let cityName = setUpdate


    let apiKey = '750f844a271e6a0e4d5caf0107a40189'

    let url = 'api.openweathermap.org/data/2.5/weather?q=london&appid=' + { apiKey };

    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                setData(
                    JSON.stringify(setData),
                    console.log('data', data),
                    console.log('setData', setData)    
                )
            })
    })
    return (
        <div className="main">
            <label>City Name</label>
            <input placeholder="City name" type='text' id='city' onChange={element => setUpdate(element.target.value)} />
            <button type="button" onClick={() => {
            }}>Show Weather</button>
            
        </div>
    )
}