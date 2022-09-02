import { useContext } from "react"
import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import bannerService from "../../services/banner.services"
import { Row, Col, Modal, Image } from 'react-bootstrap'
import CarouselForm from "../CarouselForm/CarouselForm"
import CarouselCard from "../CarouselCard/CarouselCard"


const CarouselList = () => {

    const [photo, setPhoto] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { user } = useContext(AuthContext)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => {
        loadImages()
    }, [])

    const loadImages = () => {

        bannerService
            .getAllImages()
            .then(({ data }) => setPhoto(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                <Row>
                    <Col>
                        {
                            user?.role === 'ADMIN' &&
                            <>
                                <button>
                                    <span onClick={openModal} className='addPlus' >Upload Photo1</span>
                                </button>
                                <button>
                                    <span onClick={openModal} className='addPlus' >Upload Photo2</span>
                                </button>
                                <button>
                                    <span onClick={openModal} className='addPlus' >Upload Photo3</span>
                                </button>
                            </>
                        }
                    </Col>
                    <hr></hr>


                    {console.log(photo)}
                    {
                        photo.length ?
                            
                            < Carousel className='carousel' >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgs"
                                        // src='./../../../images/laptop.jpeg'
                                        src={photo[0].pictures[0]}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgs"
                                        // src='./../../../images/apple.jpeg'
                                        src={photo[1].pictures[0]}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgs"
                                        // src='./../../../images/ipad.jpeg'
                                        src={photo[2].pictures[0]}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel >
                            
                            :
                            <>
                                <h1 className='event-notFound' >Ohhhh no... no item was found</h1>
                                <Image src='#' className='searchImg' />
                            </>
                    }

                    < Modal show={showModal} onHide={closeModal} >
                        <Modal.Header className='modal-global' closeButton>
                            <Modal.Title>Create New Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal-body'>
                            <CarouselForm closeModal={closeModal} loadImages={loadImages} />
                        </Modal.Body>
                    </Modal >

                </Row>

            }

        </>
    )
}
export default CarouselList