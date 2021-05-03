import { FaTags, FaTimes } from 'react-icons/fa'

interface TagProps {
  tag: string
}

interface RemoveTagProps {
  tag: string
  starID: number
  removeTag: (starID: number, tag: string) => void
}

export const Tag = ({ tag }: TagProps) => {
	return (
		<button key={tag} className="tag me-2 btn btn-outline-secondary">
			<FaTags className="me-1" />
			{tag}
		</button>
	)
}

export const RemoveTag: React.FC<RemoveTagProps> = ({ tag, starID, removeTag }) => {
	return (
		<span id={starID.toString()} onClick={() => removeTag(starID, tag)} key={tag} className="tag btn btn-outline-danger">
			<FaTags className="me-1" />
			{tag}
			<FaTimes className="ms-2" />
		</span>
	)
}