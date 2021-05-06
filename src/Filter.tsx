import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useState, useEffect } from 'react'

export const Filter = ({ stars, filteredTags, setFilteredTags, showAll }) => {
	const [options, setOptions] = useState({})

	useEffect(createOptions, [stars])

	function createOptions() {
		const allTags = []
		stars.map((star) => allTags.push(...star.tags))
		const uniqueTags = [...new Set(allTags)]
		const options = uniqueTags.map((tag) => {
			return ({ 'value': tag, 'label': tag })
		})
		// console.log({ options })
		setOptions([...options, { 'value': 'untagged', 'label': 'untagged' }])
	}

	return (
		<div className="tag-filter col-3">
			<h4>Tag Filter</h4>
			<div className="tag-selector">
				<Select
					components={makeAnimated()}
					options={options}
					className="mb-3 font-weight-bold"
					isSearchable
					isMulti
					onChange={setFilteredTags}
					value={filteredTags}
				/>
			</div>
			<div className="current-filter">
				<button onClick={showAll} className="btn btn-primary mb-4">Show All</button>
			</div>
		</div>
	)
}