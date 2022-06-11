import React from 'react'
import { Carousel } from 'react-bootstrap'

import '../images/carousel/imagen1.jpeg'
import '../images/carousel/imagen2.jpeg'
import '../images/carousel/imagen3.jpeg'
import '../images/carousel/imagen4.jpeg'
import '../images/carousel/imagen5.jpeg'
import '../images/carousel/imagen6.jpeg'
import '../images/carousel/imagen7.jpeg'
import '../images/carousel/imagen8.jpeg'
import '../images/carousel/imagen9.jpeg'
import '../images/carousel/imagen10.jpeg'
import '../images/carousel/imagen11.jpeg'
import '../images/carousel/imagen12.jpeg'

import '../styles/carousel.scss'

export const Gallery = () => {
  return (
    <div className='carousel-container'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen1.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen2.jpeg')}
            alt="imagen2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen3.jpeg')}
            alt="imagen3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen4.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen5.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen6.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen7.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen8.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen9.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen10.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen11.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={require('../images/carousel/imagen12.jpeg')}
            alt="imagen1"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

