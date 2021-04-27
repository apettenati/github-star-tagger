import { Card, ListGroup, Button, Nav } from 'react-bootstrap'
import { EditTags } from './EditTags'
import { FaEdit, FaTags } from 'react-icons/fa'

export function Star({ star, addTag, removeTag }) {

  return (
    <div className="bg-light card">
      <div className="card-body">
        <h3 className="card-title">{star.name}</h3>
        <p className="card-subtitle mb-4 text-muted fst-italic">{star.owner.login}</p>
        <p className="card-text fst-light">{star.description}</p>
        <div className="d-flex justify-content-start gap-1">
          {(star.tags.length === 0) ? <button className="tag btn btn-outline-secondary">No tags</button> : null}
          {star.tags.map((tag) => (
            <button key={tag} className="tag btn btn-outline-secondary">
              <FaTags style={{ marginRight: 5, }} />
              {tag}
            </button>))}
          <EditTags
            starID={star.id}
            tags={star.tags}
            addTag={addTag}
            removeTag={removeTag}
          />
        </div>
      </div>
    </div>

  )
}