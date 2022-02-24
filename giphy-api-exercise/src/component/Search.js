import React, { useState } from 'react';

export const SearchCity = () =>{
    const [city, setCity] = useState('')

    const apiKey= '750f844a271e6a0e4d5caf0107a40189';

    const response = fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ city }&limit=1&appid=${ apiKey }`)