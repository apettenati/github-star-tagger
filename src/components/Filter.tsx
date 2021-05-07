import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useState, useEffect } from 'react'

export const Filter = ({ stars, setStars }) => {
	const [options, setOptions] = useState({})
	const [tagFilter, setFilter] = useState([])

	useEffect(filterStars, [tagFilter, setStars])
	useEffect(createOptions, [stars])

	function filterStars() {
		// Get all tags set.
		const currentTags = tagFilter.map((tag) => tag.value)
		// console.log({ currentTags })

		// Show all untagged stars.
		if (currentTags.includes('untagged') && currentTags.length === 1) {
			// console.log('untagged')
			return setStars(stars => stars.map((star) => {
				const visible = (star.tags.length === 0)
				return { ...star, visible}
			}))
		}

		// Set all stars to visible if no filter is set.
		if (tagFilter.length === 0) {
			// console.log('no filter')
			return setStars(stars => stars.map(star => ({ ...star, visible: true })))
		}


		// Otherwise update each star.
		setStars(stars => stars.map((star) => {
			const visible = currentTags.every((activeTag) => star.tags.includes(activeTag))
			return { ...star, visible }
		}))
	}

	function showAll() {
		setStars(stars.map(star => ({ ...star, visible: true})))
		setFilter([])
	}

	function createOptions() {
		const allTags = []
		stars.forEach((star) => allTags.push(...star.tags))
		const uniqueTags = [...new Set(allTags)]
		const options = uniqueTags.map((tag) => ({ 'value': tag, 'label': tag }))
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
					onChange={setFilter}
					value={tagFilter}
				/>
			</div>
			<div className="current-filter">
				<button onClick={showAll} className="btn btn-primary mb-4">Show All</button>
			</div>
		</div>
	)
}