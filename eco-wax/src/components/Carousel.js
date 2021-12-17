import React from 'react'
import {Carousel} from 'react-bootstrap'
import "../images/pic1.jpeg"
import "../images/pic2.jpeg"
import "../images/pic3.jpeg"


export const CarouselMain =()=> {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block"
      src='https://media.giphy.com/media/4MVjKN1FqNSZOixYm2/giphy.gif'
      alt="pic1"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://media.giphy.com/media/kGdBpTRRUNOWY24qSR/giphy.gif"
      alt="pic2"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://media.giphy.com/media/5UH2PJ8VIEuMqN8V6R/giphy.gif"
      alt="pic3"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}