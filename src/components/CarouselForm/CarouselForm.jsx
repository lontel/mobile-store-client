import { Form, Button } from 'react-bootstrap'
import { MessageContext } from './../../contexts/userMessage.context'
import uploadService from "../../services/upload.services"
import { useContext, useEffect, useState } from 'react'
import bannerService from '../../services/banner.services'


const CarouselForm = ({ closeModal, loadImages }) => {

    const [bannerData, setBannerData] = useState({
        pictures: ''
    })

    const { setShowMessage } = useContext(MessageContext)


    const handleSubmit = e => {
        e.preventDefault()

        bannerService
            .saveImages(bannerData)
            .then((data) => {
                loadImages()
                setShowMessage({ show: true, title: `Photo uploaded`, text: `Photo uploaded succesfully!` })
            })
            .catch(err => console.error(err))
    }

    const handleFileInput = e => {

        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i])
        }

        uploadService
            .uploadimages(formData)
            .then(({ data }) => {
                setBannerData({ ...bannerData, pictures: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }
  
    return (
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="pictures">
                <Form.Label>Pick up images</Form.Label>
                <Form.Control type="file" className="input" onChange={handleFileInput} name="pictures" multiple />
            </Form.Group>
            <Form.Group className="d-grid">
                <Button onClick={closeModal} variant="dark" type="submit">Upload banner images</Button>
            </Form.Group>
        </Form>
    )
}

export default CarouselForm