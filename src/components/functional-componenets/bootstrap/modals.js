import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click here!!!!!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you like the above Carousel</Modal.Title>
        </Modal.Header>
        <Modal.Body>I think you liked it</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Definitely yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals