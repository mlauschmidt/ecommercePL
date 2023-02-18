import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ title, description, price, pictureUrl }) => {
    return (
        <Card style={{ width: '15rem'}}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                {/* <Card.Text>{description}</Card.Text> */}
                <Button variant="primary">COMPRAR</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
