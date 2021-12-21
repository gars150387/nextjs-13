import React from 'react'
import { Carousel } from 'react-bootstrap'

export const DisplayProducto = () =>{
    return (
        <div className='row'>
            <div className='col-5 m-auto'>
                <Carousel />
            </div>
            <div>
                <p>Here description</p>
            </div>

            


        </div>
    )
}