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
      src={require("../images/pic1.jpeg").default}
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
      src={require('../images/pic2.jpeg'.default)}
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
      src={require('../images/pic3.jpeg')}
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