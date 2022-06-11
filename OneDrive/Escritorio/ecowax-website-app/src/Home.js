import React from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ProductOne } from './components/ProductOne'
import { ProductThree } from './components/ProductThree'
import { ProductTwo } from './components/ProductTwo'
import { ProductFour } from './components/ProductFour'
import { Gallery } from './components/Gallery'


import '../src/styles/home.scss'
import { CustomersReviews } from './components/CustomersReviews'
import { Video } from './components/Video'

export const Home = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <div className='home-container'>
                <div className='products'>
                    <ProductThree />
                    <ProductTwo />
                    <ProductOne />
                    <ProductFour />
                </div>
                <div className='gallery-div'>
                    <h1 className='gallery-title'>Galeria</h1>
                    <Gallery />
                </div>
                {/* <div>
                    <Video />
                </div> */}
                {/* <div>
                    <CustomersReviews />
                </div> */}

            </div>
        </>
    )
}
