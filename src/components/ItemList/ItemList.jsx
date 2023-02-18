import './ItemList.css';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemList = ({listado}) => {
    return (
        <Container fluid>
            <Row md="auto" className='card-row'>
                {listado.map((prod) => (
                    <Col className='card-col'>
                        <Item
                            key={prod.id}
                            id= {prod.id}
                            title= {prod.title}
                            description= {prod.description}
                            price= {prod.price}
                            pictureUrl= {prod.pictureUrl}
                        />          
                    </Col>                            
                ))}        
            </Row>
        </Container>  
    );
}

export default ItemList;