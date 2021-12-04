import React from "react"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css'

export const CarouselMainPage =()=>{
    return(
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://itechzo.com/wp-content/uploads/2019/11/bootstrap.png"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Forth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png"
      alt="Third slide"
    />
{/* 
    <Carousel.Caption>
      <h3>Forth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    )
}