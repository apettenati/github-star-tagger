import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { FaEdit, FaTimes } from 'react-icons/fa'
import { RemoveTag } from './Tag';

export function EditTags({ starID, tags, addTag, removeTag }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [text, setText] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    const id = Number(event.target.id)
    const newTag = text.trim()
    if (newTag === '') {
      alert('Please enter text to add a new tag')
      return
    }
    addTag(id, newTag)
    setText('')
  }

  return (
    <div className="tags">
      <Button variant="link" onClick={handleShow}>
        <FaEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id={starID} onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label htmlFor="add-tag">Add Tag</Form.Label>
              <Form.Control
                type="text"
                name="add-tag"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
              <Button className="mt-2 btn btn-success" type="submit">Add Tag</Button>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label htmlFor="remove-tag">Remove Tag</Form.Label>
              <div className="d-flex justify-content-start gap-1">
                {(tags.length === 0) ? <button className="tag btn btn-outline-secondary disabled">No tags</button> : null}
                {tags.map((tag) => (
                  < RemoveTag 
                  key={tag}
                  tag={tag}
                  starID={starID}
                  removeTag={removeTag}
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="outline-danger">
            <FaTimes />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}