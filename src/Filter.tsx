import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useState, useEffect } from 'react'

export const Filter = ({ allTags, filteredTags, setFilteredTags, filterNoTags, showAll }) => {
	const [options, setOptions] = useState({})

	useEffect(() => {
		createOptions(allTags)
	}, [allTags])

	function createOptions(allTags) {
		const options = allTags.map((tag) => {
			return ({ 'value': tag, 'label': tag })
		})
		console.log({ options })
		setOptions([...options, { 'value': 'no tags', 'label': 'no tags' }])
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
					value={filteredTags}
				/>
			</div>
			<div className="current-filter">
				<button onClick={showAll} className="btn btn-primary">Show All</button>
			</div>
			<br />
		</div>
	)
}