import './CarouselCard.css'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


function CarouselCard({ pictures }) {

    return (
        <>
            <Carousel className='carousel' >
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        // src='./../../../images/laptop.jpeg'
                        src={pictures[0]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        // src='./../../../images/apple.jpeg'
                        src={pictures[1]}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        // src='./../../../images/ipad.jpeg'
                        src={pictures[2]}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        <p>
                            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}

export default CarouselCard