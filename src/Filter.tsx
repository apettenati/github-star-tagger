import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useState, useEffect } from 'react'

export const Filter = ({ allTags, setFilteredTags, filterNoTags, removeFilterNoTags }) => {
  const [options, setOptions] = useState({})

  useEffect(() => {
    createOptions(allTags)
  }, [allTags])

  function createOptions(allTags) {
    const options = allTags.map((tag) => {
      return ({ 'value': tag, 'label': tag })
    })
    console.log({ options })
    setOptions([...options])
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
        {/* <h5> All Tags</h5>
        {(allTags.length < 1) && <p>No Tags</p>}
        {allTags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))} */}
        <button onClick={filterNoTags} className="btn btn-primary">Filter Stars No Tags</button>
        <button onClick={removeFilterNoTags} className="ms-2 btn btn-outline-primary">Remove No Tags Filter</button>
      </div>
      <br />
    </div>
  )
}