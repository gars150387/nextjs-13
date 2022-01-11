import React, { useState, useEffect } from "react";

export const SearchWeather = () => {
    const [update, setUpdate] = useState('')

    const [data, setData] = useState([]);

    let cityName = setUpdate

    let url = 'api.openweathermap.org/data/2.5/weather?q='+{cityName}+'&appid=750f844a271e6a0e4d5caf0107a40189';

    useEffect((url) => {
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(url)
        })
            .then((response)=> {
                return response.json()
            })
            .then(setData =>{
                JSON.stringify(setData)
                console.log('data', setData)
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