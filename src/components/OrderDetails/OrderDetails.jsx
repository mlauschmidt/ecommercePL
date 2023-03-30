import './OrderDetails.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import MessageSuccess from "../MessageSuccess/MessageSuccess";

const OrderDetails = ({prods, total}) => {
    const initialState = {
        buyer: {
            name: "",
            email: "",
            phone: ""
        },
        items: {    
            name: "", 
            price: "",
            quantity: ""  
            },
        total: "", 
    };

    const [values, setValues] = useState(initialState);
    const [validated, setValidated] = useState(false);
    const [orderID, setOrderID] = useState("");
   
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({...values, buyer: {...values.buyer, [name]: value}});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.stopPropagation();
        } else {
            prods.forEach((prod) => {
                setValues({...values, 
                    items: [{...values.items,
                        name: prod.title, 
                        price: prod.price,
                        quantity: prod.quantity
                    }], 
                    total: total
                })
            });
            const docRef = await addDoc(collection(db, "orders"), {
                values,                 
            });
            setOrderID(docRef.id);  
        }
        setValidated(true);
    };

    return (
        <>
        {orderID ? <MessageSuccess orderID={orderID} /> : 
            <div className='order-details'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className='input-finalizar' controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"                            
                            placeholder="Nombre y Apellido"
                            name='name'
                            value={values.name}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className='input-finalizar' controlId="validationCustom02">
                        <Form.Control                            
                            required
                            type="text"
                            placeholder="Correo electrónico"
                            name='email'
                            value={values.email}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className='input-finalizar' controlId="validationCustom05">
                        <Form.Control 
                            required                             
                            type="text" 
                            placeholder="Celular"
                            name='phone'
                            value={values.phone}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Acepto términos y condiciones."
                        />
                    </Form.Group>
                    <Button type="submit" variant="secondary" className='btn-finalizar-compra'>FINALIZAR COMPRA</Button> 
                </Form>
            </div>
        }
        </>
    );
}

export default OrderDetails;
