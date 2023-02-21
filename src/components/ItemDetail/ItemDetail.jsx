import './ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({details}) => {
    return (
        <Container className='detail-container' fluid>
            <Row md="auto" className='detail-row'>
                <Col className='detail-col-img'>
                    <Card>
                        <Card.Img variant="top" src={details.pictureUrl} />
                    </Card>  
                </Col>
                <Col className='detail-col-description'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{details.title}</Card.Title>
                            <Card.Text>{details.description}</Card.Text>
                            <Card.Text>{details.price}</Card.Text>
                            <Button variant="secondary">
                                COMPRAR
                            </Button>
                        </Card.Body>
                    </Card>  
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;