import { useState, useContext } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import itemService from "../../services/item.services"
import uploadService from "../../services/upload.services"
import { MessageContext } from './../../contexts/userMessage.context'


const ItemForm = ({ closeModal, loadItems }) => {

    const [itemData, setItemData] = useState({
        name: '',
        category: '',
        images: '',
        description: '',
        rating: '',
        price: '',
        publisher: '',
        relaseDate: ''
    })

    const { setShowMessage } = useContext(MessageContext)

    const handleChange = e => {
        const { value, name } = e.target
        setItemData({ ...itemData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        itemService
            .saveItem(itemData)
            .then((data) => {
                loadItems()
                setShowMessage({ show: true, title: `Item created`, text: `Item registered succesfully!` })
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
                setItemData({ ...itemData, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }

    const { name, category, description, rating, price, publisher, relaseDate } = itemData

    return (

        <Form onSubmit={handleSubmit} encType="multipart/form-data">

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" className="input" value={name} onChange={handleChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" className="input" value={category} onChange={handleChange} name="category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="images">
                <Form.Label>Item Photos</Form.Label>
                <Form.Control type="file" className="input" onChange={handleFileInput} name="images" multiple />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" className="input" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" className="input" value={rating} onChange={handleChange} name="rating" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control className="input" type="number" value={price} onChange={handleChange} name="price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="publisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" className="input" value={publisher} onChange={handleChange} name="publisher" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="relaseDate">
                <Form.Label>Relase Date</Form.Label>
                <Form.Control type="date" className="input" value={relaseDate} onChange={handleChange} name="relaseDate" />
            </Form.Group>

            <Form.Group className="d-grid">
                <Button variant="dark" onClick={closeModal} type="submit">Create new item</Button>
            </Form.Group>

        </Form>

    )
}

export default ItemForm