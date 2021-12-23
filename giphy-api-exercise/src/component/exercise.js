import React from 'react'

export const Fetch = () =>{
    let request = new XMLHttpRequest();

    request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=GSwMtGikN5iHMT9dDAZShDDFr9O1Lv0G' )
    
    request.onload = function(){
        let response = request.response;
        let parseData = JSON.parse(response);
        console.log(parseData)
    }
    
    request.send();
    
}