import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Modal from 'react-bootstrap/Modal';

const Item = ({ id, title, price, pictureUrl }) => {
    const [show, setShow] = useState(false);
  
    return (
        <Card style={{ width: '15rem'}}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Button variant="secondary" onClick={() => setShow(true)}>
                    VER
                </Button>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Detalle de producto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ItemDetailContainer prod={id}/>
                    </Modal.Body>
                </Modal>                
            </Card.Body>
        </Card>
    );
}

export default Item;
