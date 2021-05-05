import { Star } from './Star'
import { Filter } from './Filter'
import { useState, useEffect } from 'react'

export function Stars({ stars, setStars, allTags, tags, setTags }) {
	const [filteredTags, setFilteredTags] = useState([])
	const [filteredStars, setFilteredStars] = useState(stars)

	useEffect(() => {
		console.log({ filteredTags })
		filterStars()
	}, [filteredTags, stars])

	function addTag(id, newTag) {
		stars.forEach((star) => {
			if (star.id === id) {
				if (star.tags.includes(newTag)) {
					alert('Tag already assigned to this star')
					return
				}
				else {
					setStars(stars.map((star) => star.id === id ?
						{ ...star, tags: [...star.tags, newTag] } :
						star
					))
					setTags(tags.map((tag) => tag.starID === id ?
						{...tag, tags: [...tag.tags, newTag]} :
						tag
					))
				}
			}
		})
	}

	function removeTag(id, removedTag) {
		setStars(stars.map((star) => star.id === id ?
			{ ...star, tags: (star.tags.filter((tag) => tag !== removedTag)) } :
			star
		))
		setTags(tags.map((tag) => tag.starID === id ?
			{ ...tag, tags: (tag.tags.filter((tag) => tag !== removedTag)) } :
			tag
		))
	}

	function filterStars() {
		if (filteredTags.length < 1) {
			setFilteredStars(stars)
		} else {
			const currentTags = filteredTags.map((tag) => tag.value)
			let filter = stars.filter((star) => {
				return currentTags.every((activeTag) => star.tags.includes(activeTag))
			})
			if (currentTags.includes('untagged') && currentTags.length === 1) {
				console.log((currentTags.includes('untagged')))
				const noTags = stars.filter((star) => star.tags.length === 0)
				filter.push(...noTags)
			}
			console.log({ filter })
			setFilteredStars(filter)
		}
	}

	function filterNoTags() {
		const noTags = stars.filter((star) => star.tags.length === 0)
		setFilteredStars(noTags)
	}

	function showAll() {
		setFilteredStars(stars)
		setFilteredTags([])
	}

	return (
		<div className="stars container">
			<div className="container-fluid d-flex justify-content-between">
				<Filter
					allTags={allTags}
					filteredTags={filteredTags}
					setFilteredTags={setFilteredTags}
					filterNoTags={filterNoTags}
					showAll={showAll}
				/>
				<div>
					<h4 className="text-muted fst-italic">Total Stars: {stars.length}</h4>
					<h5 className="mb-4 text-muted fst-italic">Filtered Stars: {filteredStars.length}</h5>
				</div>
			</div>
			<div className="row row-cols-3">
				{(stars.length < 1 ?
					'No stars' :
					filteredStars.map((star) => (
						<Star
							key={star.id}
							star={star}
							addTag={addTag}
							removeTag={removeTag}
						/>
					)
					))}
			</div>
		</div>
	)
}