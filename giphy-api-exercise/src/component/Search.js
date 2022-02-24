import React, { useEffect, useState } from 'react';
import { CityFormat } from './CityFormat';

export const SearchCity = () => {

    function useFetch(){
        const [city, setCity] = useState([])

        const apiKey = '750f844a271e6a0e4d5caf0107a40189';

        //using useEffect to render data fetched//
        useEffect(() => {
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setCity(data)
                })
        })

        return {}
    

    }

    

    return (
        <div>
            <input className='mr-5' onChange={(element) => setCity(element.target.value)} />
            <button style={{ height: '40px' }} className='bg-secundary ml-5' 
            // onClick={() => {
            //     const request = fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=${apiKey}`)
            //         .then(response => response.json())
            //         .then(data => {
            //             console.log('data', data)
            //         })}} 
            >Search</button>
        </div>
    )
}