import './NavBar.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AuthContext } from '../../contexts/auth.context'
import { MessageContext } from '../../contexts/userMessage.context'
import { useContext } from 'react'


const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)

    const logout = () => {
        setShowMessage({ show: true, title: 'Good bye!', text: 'Your session has been succesfully closed' })
        logoutUser()
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Tech Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">All Products</Nav.Link>
                        <Nav.Link href="#action2">Top Deals</Nav.Link>
                        <NavDropdown title="Back to School" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">College Resources</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                K-12 Tech
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Close
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" >
                            Outlet
                        </Nav.Link>
                        <NavDropdown title="Account" id="navbarScrollingDropdown">
                            {user ?
                                <>
                                    <NavDropdown.Item href="#"><img className='img-profile-nav' src={user.avatar}  ></img>
                                        <span> My profile</span> 
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>
                                        Log out
                                    </NavDropdown.Item>
                                </>
                                :
                                <>
                                    <NavDropdown.Item href="/account/sign-up">
                                        Create Account
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/account/login">
                                        Sign In
                                    </NavDropdown.Item>
                                </>
                            }
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar