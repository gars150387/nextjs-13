import React from 'react'
import { NavbarMain } from '../components/Navbar'
import { Footer} from '../components/Footer'
import VideoOnePlayed from '../components/VideoOne'
import VideoTwoPlayed from '../components/VideoTwo'
import { Producto } from '../components/Producto'
import { CarouselMain } from '../components/Carousel'


export const Home = () => {
    return (
        <>
        <NavbarMain />
        <div className='carouselMain'><CarouselMain /></div>
        <div className='productMain'><Producto /></div>
        {/* <VideoOnePlayed />
        <VideoTwoPlayed /> */}
        <Footer />
        </>
    )
}