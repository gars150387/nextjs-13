import React, { useEffect, useState } from "react";
import { GifGripItem } from "./GifGripItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGif()
    }, [])

    const getGif = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=skimboarding&limit=10&api_key=VNq7Y3Wvw1jpy05dw5wCM6wr2SK92COX';
        const resp = await fetch(url);
        const { data } = await resp.json();

        console.log(data)

        const gif = data.map(img => {
            return {
                id: img.id,
                user: img.user?.username,
                url: img.images?.downsized_medium.url,
                title: img.title
            }
        })

        console.log(gif)
        setImages(gif)
    }
    // getGif()

    return (
        <div>
            {images.map(img =>
                <GifGripItem
                    key={img.id}
                    { ...img }
                />

            )}
        </div>
    )
}