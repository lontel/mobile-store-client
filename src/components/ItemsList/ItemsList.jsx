import './ItemsList.css'
import { Row, Col, Modal, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import ItemForm from '../ItemForm/ItemForm'
import itemService from '../../services/item.services'


const ItemsList = () => {

    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { user } = useContext(AuthContext)

    const filteredItems = e => {

        itemService
            .filterItems(e.target.value)
            .then(({ data }) => setItems(data))
            .catch(err => console.log(err))

    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

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
            {
                <Row>
                    <Col>
                        {
                            user?.role === 'ADMIN' &&
                            <button>
                                <span onClick={openModal} className='addPlus' >+ Add new item</span>
                            </button>
                        }
                    </Col>
                    <hr></hr>

                    {/* <SearchBar filteredItems={filteredItems} /> */}
                    {
                        items.length ?

                            items.map(item => {
                                return (
                                    <Col md={3} key={item._id}>
                                        <Col className='card-list'>
                                            <ItemCard {...item} />
                                        </Col>
                                    </Col>
                                )

                            })

                            :
                            <>
                                <h1 className='event-notFound' >Ohhhh no... no item was found</h1>
                                <Image src='#' className='searchImg' />
                            </>

                    }

                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header className='modal-global' closeButton>
                            <Modal.Title>Create New Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal-body'>
                            <ItemForm closeModal={closeModal} loadItems={loadItems} />
                        </Modal.Body>
                    </Modal>

                </Row>

            }
        </>
    )
}

export default ItemsList