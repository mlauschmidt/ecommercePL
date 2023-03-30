import './MessageSuccess.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MessageSuccess = ({orderID}) => {
    return (
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>¡Muchas gracias por tu compra!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Orden de compra número: {orderID}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to='/' className='volver-inicio-link'>
                        <Button variant="secondary" className='btn-volver-inicio'>VOLVER AL INICIO</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
      );
}
  
export default MessageSuccess;