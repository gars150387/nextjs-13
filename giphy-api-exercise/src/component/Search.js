import React, { useState } from 'react';

export const SearchCity = () => {
    const [city, setCity] = useState([])

    // const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=750f844a271e6a0e4d5caf0107a40189`

    // const apiKey = '750f844a271e6a0e4d5caf0107a40189';

    //using useEffect to render data fetched
    function fetchCity() {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=750f844a271e6a0e4d5caf0107a40189`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                setCity(data)
                console.log('city fetched',city)
            }, [])
    }


    return (
        <div>
            {/* {city.name && city.name.map(item => {
                return (
                    <ul>
                        <li key={item.lat}>
                            <h1>{ item.name}</h1>
                            <h4>{ item.state}</h4>
                            <h4>{ item.country}</h4>
                        </li>
                    </ul>
                )
            })} */}
            {console.log('city2', city)}
            <input className='mr-5' onChange={(element) => setCity(element.target.value)} />
            <button style={{ height: '40px' }} className='bg-secundary ml-5'
                onClick={() => {
                    fetchCity()
                }}
            >Search</button>
        </div>
    )
}