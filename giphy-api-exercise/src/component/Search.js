import React from "react";

export const Search = () =>{
    return (
        <div className="main">
            <label for="city">City Name</label>
            <input type='text' id='city'></input>
            <button type="button">Show Weather</button>
        </div>
    )
}