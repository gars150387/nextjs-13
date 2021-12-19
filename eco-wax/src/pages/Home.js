import React from 'react'
import { CarouselMain } from '../components/Carousel'
import { CardContent } from '../components/Content'
import { NavbarMain } from '../components/Navbar'
import { Footer} from '../components/Footer'
import Video1 from '../components/Video1'


export const Home = () => {
    return (
        <>
        <NavbarMain />
        <CarouselMain/>
        <Video1 />
        <CardContent/>
        <Footer />
        </>
    )
}