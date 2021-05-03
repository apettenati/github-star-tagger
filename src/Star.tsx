import { EditTags } from './EditTags'
import { Tag } from './Tag'

export function Star({ star, addTag, removeTag }) {

	return (
		<div className="container-fluid d-flex flex-column p-0">
			<div className="star-card card m-1">
				<div className="card-body">
					<h4 className=""><a className="star-header" href={star.html_url}>{star.name}</a></h4>
					<h6 className="card-subtitle mb-4 text-muted fst-italic">{star.owner.login}</h6>
					<p className="card-text fst-light">{star.description}</p>
				</div>
				<div className="d-flex card-footer justify-content-start gap-1">
					{(star.tags.length === 0) ?
						<button className="tag btn btn-outline-secondary disabled">untagged</button> :
						null
					}
					{star.tags.map((tag) => (
						<Tag key={tag} tag={tag} />
					))}
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