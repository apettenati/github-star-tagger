import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'

export function User({ username, setUsername }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="user">
      <div>Current Username: {username}
        <Button onClick={handleShow}>
          <FaUser />
        Change Username
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={setUsername}>
            <Form.Label htmlFor="username"><h4>Username</h4></Form.Label>
            <Form.Control type="text" name="username" />
            <Button className="mt-2 btn btn-success" type="submit">Update Username</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="outline-danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}