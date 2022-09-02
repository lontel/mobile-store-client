import './ItemCard.css'
import { Card, Image } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'


function ItemCard({ name, price, images }) {

    return (
        <Card className='card'>
            <Card.Body >
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="item-pic"
                            src={images[0]}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="item-pic"
                            src={images[1]}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Col className='item-info'>
                    <h5>{name}</h5>
                    <span>{price}€</span>
                </Col>
               
                <Link to={`/item/details`}>
                    <button className="cta">
                        <span className="hover-underline-animation"> More Details </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </Card.Body>

        </Card >
    )
}

export default ItemCard