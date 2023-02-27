import './ItemList.css';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ItemList = ({list}) => {
    return (
        <Container fluid>
            <Row xs={3} md={5} className='card-row'>
                {list.map((prod) => (
                    <Col className='card-col' key={prod.id}>
                        <Link to={`/productos/${prod.title.toLowerCase().replace(/ /g, "-")}`} className='item-link'>
                            <Item
                                id= {prod.id}
                                title= {prod.title}
                                description= {prod.description}
                                price= {prod.price}
                                pictureUrl= {prod.pictureUrl}
                            />
                        </Link>
                    </Col>                            
                ))}        
            </Row>
        </Container>  
    );
}

export default ItemList;