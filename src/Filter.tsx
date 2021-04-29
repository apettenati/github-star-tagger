import { FaTags, FaEdit, FaTimes } from 'react-icons/fa'
import { Tag } from './Tag'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useState } from 'react'

// interface FilterProps {
//   allTags: any[]
//   setFilteredTags: () => any
// }

export const Filter = ({ allTags, setFilteredTags }) => {
  const [options, setOptions] = useState({value: allTags, label: allTags})


  return (
    <div className="tag-filter">
      <h4>Tag Filter</h4>
      <div className="tag-selector">
        <Select
          options={allTags}
          className="mb-3 font-weight-bold"
          placeholder="Filter Tags"
          isSearchable
          isMulti
          onChange={setFilteredTags}
        />
      </div>
      <div className="current-filter">
        <h5> All Tags</h5>
          {(allTags.length < 1) && <p>No Tags</p>}
          {allTags.map((tag) => (
            <Tag key={tag} tag={tag}/>
          ))}
        <h5> Selected Tags</h5>
          {/* {(allTags.length < 1) && <p>No Selected Tags</p>}
          {filteredTags.map((tag) => (
            <Tag key={tag.value} tag={tag.value}/>
          ))} */}
      </div>
      <br />
    </div>
  )
}