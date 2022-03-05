import React from 'react'

    export const GetGif = async ( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=VNq7Y3Wvw1jpy05dw5wCM6wr2SK92COX`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        console.log(data)

        const gif = data.map(img => {
            return {
                id: img.id,
                user: img.user?.username,
                url: img.images?.fixed_height.url,
                title: img.title
            }
        })

        console.log(gif)
        return gif;
    }