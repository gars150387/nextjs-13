import React from 'react'
import { NavbarMain } from '../components/Navbar'
import { Footer} from '../components/Footer'
// import {CarouselMain} from '../components/Carousel'
import VideoOnePlayed from '../components/VideoOne'
import VideoTwoPlayed from '../components/VideoTwo'
import { Producto } from '../components/Producto'
import { Caracteristicas } from '../components/ListaDeCaracteristicas'


export const Home = () => {
    return (
        <>
        <NavbarMain />
        <Producto />
        {/* <Caracteristicas/> */}
        <VideoOnePlayed />
        <VideoTwoPlayed />
        {/* <CarouselMain/> */}
        <Footer />
        </>
    )
}