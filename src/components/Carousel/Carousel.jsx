import './Carousel.css'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import itemService from '../../services/item.services'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react';
import uploadService from "../../services/upload.services"
import { Form } from 'react-bootstrap'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Loader from '../Loader/Loader';


function ControlledCarousel() {
    // const [index, setIndex] = useState(0);
    const [items, setItems] = useState([])
    const { user } = useContext(AuthContext)

    const [itemData, setItemData] = useState({
        images: ''
    })


    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // }

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = () => {
        itemService
            .getAllItems()
            .then(({ data }) => setItems(data))
            .catch(err => console.log(err))
    }

    const handleFileInput = e => {

        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i])
        }

        uploadService
            .uploadimages(formData)
            .then(({ data }) => {
                setItemData({ images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }
    return (
        <>

            {

                user?.role === 'ADMIN' ?

                <Grid item xs={12}>
                    <Button
                        id="carousel"
                            label="carousel"
                            name="carousel"
                        variant="outlined"
                        component="label"
                        fullWidth>
                        <PhotoCamera />
                        Carousel photos *
                        <input hidden accept="image/*" multiple type="file" onChange={handleFileInput} />
                    </Button>
                </Grid>
                :
                <Loader />

            }
            <Carousel className='carousel' >
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        // src='./../../../images/laptop.jpeg'
                        src={itemData.images[0]} 
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
                        src={itemData.images[1]}
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
                        src={itemData.images[2]}
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

export default ControlledCarousel