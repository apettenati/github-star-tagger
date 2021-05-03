import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { FaUser, FaTimes } from 'react-icons/fa'

export function User({ username, setUsername }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onSubmit(event) {
    event.preventDefault()
    const newUsername = event.target['new-username'].value.trim()
    console.log(newUsername)
    if (newUsername === '') {
      alert('Please enter text to change the username')
      return
    }
    setUsername(newUsername)
    handleClose()
  }

  return (
    <div className="mt-4 p-0 card container-fluid col-2">
      <div className="card-header">Username</div>

      <div className="d-flex flex-column justify-content-center card-body">
        <p><FaUser /> {username}</p>
        <Button className="btn btn-sm btn-secondary" onClick={handleShow}>
          Change Username
      </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit Username</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label htmlFor="new-username">Username</Form.Label>
            <Form onSubmit={onSubmit}>
              <Form.Control type="text" name="new-username" />
              <Button className="mt-2 btn btn-success" type="submit">Update Username</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="outline-danger">
              <FaTimes />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </div>

  )
}