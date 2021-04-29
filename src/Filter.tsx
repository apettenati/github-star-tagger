import { FaTags, FaEdit, FaTimes } from 'react-icons/fa'
import { Tag } from './Tag'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useState, useEffect } from 'react'

// interface FilterProps {
//   allTags: any[]
//   setFilteredTags: () => any
// }

export const Filter = ({ allTags, setFilteredTags }) => {
  const [options, setOptions] = useState({})

  useEffect(() => {
    createOptions(allTags)
  }, [allTags])

  function createOptions(allTags) {
    const options = allTags.map((tag) => {
      return ({ 'value': tag, 'label': tag })
    })
    console.log({ options })
    setOptions([...options, { 'value': 'no tags', 'label': 'no tags'} ])
  }

  return (
    <div className="tag-filter">
      <h4>Tag Filter</h4>
      <div className="tag-selector">
        <Select
          components={makeAnimated()}
          options={options}
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
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <br />
    </div>
  )
}