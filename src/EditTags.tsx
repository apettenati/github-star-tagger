import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { FaEdit, FaTimes } from 'react-icons/fa'
import { RemoveTag } from './Tag'

export function EditTags({ star, addTag, removeTag }) {
	const [show, setShow] = useState(false)

	const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)

	function onSubmit(event) {
		event.preventDefault()
		const newTag = event.target['add-tag'].value.trim()
		console.log({newTag})

		if (star.tags.includes(newTag)) {
			alert('Tag already assigned to this star')
			return
		}
		if (newTag === '') {
			alert('Please enter text to add a new tag')
			return
		}

		addTag(newTag)
		event.target['add-tag'].value = ''
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
					<Form id={star.id} onSubmit={onSubmit}>
						<Form.Group>
							<Form.Label htmlFor="add-tag">Add Tag</Form.Label>
							<Form.Control
								type="text"
								name="add-tag"
							/>
							<Button className="mt-2 btn btn-success" type="submit">Add Tag</Button>
						</Form.Group>
						<br />
						<Form.Group>
							<Form.Label htmlFor="remove-tag">Remove Tag</Form.Label>
							<div className="d-flex justify-content-start gap-1">
								{(star.tags.length === 0) ?
									<button className="tag btn btn-outline-secondary disabled">untagged</button> : null}
								{star.tags.map((tag) => (
									< RemoveTag
										key={tag}
										tag={tag}
										removeTag={() => removeTag(tag)}
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