import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function ItemCard ({name, description, images}) {
    
    return (
        <Row xs={1} md={2} className="g-4">
         
                <Col>
                    <Card>
                        <Card.Img variant="top" src={images[0]}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
           
        </Row>
    );
}

export default ItemCard