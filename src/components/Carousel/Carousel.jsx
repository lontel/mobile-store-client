import './Carousel.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import itemService from '../../services/item.services'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState([])

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = () => {
        itemService
            .getAllItems()
            .then(({ data }) => setItems(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <hr></hr>
            {
                items.length? 
                    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src={items[0].images[0]}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={items[0].images[1]}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={items[0].images[2]}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    :
                    <h1 className='event-notFound' >Ohhhh no... no item was found</h1>

            }
        </>
    )
}

export default ControlledCarousel