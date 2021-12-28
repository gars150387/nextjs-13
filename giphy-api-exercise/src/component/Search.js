import React, { useState } from "react";

export const SearchWeather = () => {
    const [update, setUpdate] = useState('')
    let cityName = setUpdate.value

    return (
        <div className="main">
            <label>City Name</label>
            <input placeholder="City name" type='text' id='city' onChange={element => setUpdate(element.target.value)} />
            <button type="button" onClick={function () {
                let http = new XMLHttpRequest()
                let apiKey = "750f844a271e6a0e4d5caf0107a40189"
                let url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=' + apiKey;
                let method = 'GET'

                http.open(method, url)
                http.onreadystatechange = function () {
                    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
                        let data = JSON.parse(http.responseText);
                        // let weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
                        // weatherData.temperate = data.main.temp;
                        // console.log(weatherData)
                    } else if (http.readyState === XMLHttpRequest.DONE) {
                        alert("Somethign went wrong!")
                    }
                    http.send()
                }
                if (cityName.trim().lenght === 0) {
                    alert("Please enter a valid city")
                }

                // if (cityName.length === 0){
                //     alert("Please enter a valid city name")
                // }
                console.log("clicked")
            }
            }>Show Weather</button>
        </div>
    )
}