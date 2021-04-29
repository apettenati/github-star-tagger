import { FaTags, FaEdit, FaTimes } from 'react-icons/fa'
import { Tag } from './Tag'

interface FilterProps {
  allTags: string[]
}

export const Filter: React.FC<FilterProps> = ({ allTags }) => {

  // useEffect(() => {
  //   getAllTags(stars)
  // })


  return (
    <div className="tag-filter">
      <div className="tag-selector">
        <h4>Tag Filter</h4>
      </div>
      <div className="current-filter">
          {(allTags.length < 1) && <p>No Tags</p>}
          {allTags.map((tag) => (
            <Tag tag={tag}/>
          ))}
      </div>
      <br />
    </div>
  )
}