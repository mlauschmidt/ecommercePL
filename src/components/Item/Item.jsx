import './Item.css';
import Card from 'react-bootstrap/Card';

const Item = ({ title, price, pictureUrl }) => {  
    return (
        <Card>
            <Card.Img variant="top" src={pictureUrl}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>           
            </Card.Body>
        </Card>
    );
}

export default Item;
