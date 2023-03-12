import './SearchBar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { useState} from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState ("");
    
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onClick = () => {
        setValue("");
    }
    
    return (
        <Form className="d-flex" onClick={onClick}>
            <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
            value={value}
            onChange={onChange}
            />
            <Link to={`/search/${value.toLowerCase().replace(/ /g, "-")}`} className='search-link'>
                <Button variant="outline-secondary" type="submit" className='btn-search'>
                    <FaSearch/>
                </Button> 
            </Link>
        </Form>
    );
}

export default SearchBar;