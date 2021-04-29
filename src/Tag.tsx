import { FaTags, FaEdit, FaTimes } from 'react-icons/fa'

interface TagProps {
  tag: string

}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <button key={tag} className="tag btn btn-outline-secondary">
      <FaTags style={{ marginRight: 5, }} />
      {tag}
    </button>

  )
}