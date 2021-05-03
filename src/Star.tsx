import { EditTags } from './EditTags'
import { Tag } from './Tag'

export function Star({ star, addTag, removeTag }) {

	return (
		<div className="bg-light card col">
			<div className="card-body">
				<h3 className="card-title"><a href={star.html_url}>{star.name}</a></h3>
				<p className="card-subtitle mb-4 text-muted fst-italic">{star.owner.login}</p>
				<p className="card-text fst-light">{star.description}</p>
				<div className="d-flex justify-content-start gap-1">
					{(star.tags.length === 0) ?
						<button className="tag btn btn-outline-secondary disabled">no tags</button> :
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