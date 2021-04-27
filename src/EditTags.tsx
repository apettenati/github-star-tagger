import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { FaTags, FaEdit,  FaTimes } from 'react-icons/fa'

export function EditTags({ starID, tags, addTag, removeTag }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form id={starID} onSubmit={addTag}>
            <Form.Label htmlFor="add-tag"><h4>Add Tag</h4></Form.Label>
              <Form.Control type="text" name="add-tag" />
              <Button className="mt-2 btn btn-success" type="submit">Add Tag</Button>
          </Form>
          <br />
          <h4>Delete Tags</h4>
          <div className="d-flex justify-content-start gap-1">
          {(tags.length === 0 ) ? <button className="tag btn btn-outline-secondary">No tags</button> : null } 
            {tags.map((tag) => (
              <span id={starID} onClick={() => removeTag(starID, tag)} key={tag} className="tag btn btn-outline-danger">
                <FaTags style={{ marginRight: 5, }} />
                {tag}
                <FaTimes style={{ marginLeft: 5 }} />
              </span>
            ))}
          </div>
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