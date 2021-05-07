import { FaTags, FaTimes } from 'react-icons/fa'

export const Tag = ({ tag }) => {
	return (
		<button key={tag} className="tag me-2 btn btn-outline-secondary">
			<FaTags className="me-1" />
			{tag}
		</button>
	)
}

export const RemoveTag = ({ tag, removeTag }) => {
	return (
		<div className="btn-group" role="group" aria-label="Basic example">
			<span className="btn btn-outline-secondary tag-hover">
				<FaTags className="me-1" />
				{tag}
			</span>
			<button type="button" onClick={removeTag} className="btn btn-sm btn-outline-secondary rmv-border-left remove-tag-btn"><FaTimes /></button>
		</div>
	)
}