import React, {useState} from "react";

export const Search = () =>{
    const [update, setUpdate] = useState('')
    let searchCity = setUpdate
    {searchCity.lenght < 1 && alert("Please enter a valid city") }
    let http = new XMLHttpRequest()
    let apiKey = "750f844a271e6a0e4d5caf0107a40189"
    let url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={750f844a271e6a0e4d5caf0107a40189}'
    let method = 'GET'

    http.open(method, url)
    http.onreadystatechange = function(){
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200){

        }else if (http.readyState === XMLHttpRequest.DONE){
            // alert("Somethign went wrong!")
        }
    }

    return (
        <div className="main">
            <label>City Name</label>
            <input placeholder="City name" type='text' id='city' onChange={element => setUpdate(element. target.value)}></input>
            {}
            <button type="button" onClick={function(){
                if (searchCity.length === 0){
                    alert("Please enter a valid city name")
                }
                console.log("clicked")
            }
            }>Show Weather</button>
        </div>
    )
}