import { Star } from './Star'
import { Filter } from './Filter'
import { useState, useEffect } from 'react'

export function Stars({ stars, setStars }) {
	const [filteredTags, setFilteredTags] = useState([])
	const [filteredStars, setFilteredStars] = useState(stars)

	useEffect(filterStars, [filteredTags, stars])

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
			console.log({ useEffectFilter: filter })
			setFilteredStars(filter)
		}
	}

	function setStar(updatedStar) {
		setStars(stars.map((star) => 
			star.id === updatedStar.id
				? updatedStar
				: star
		))
	}

	function showAll() {
		setFilteredStars(stars)
		setFilteredTags([])
	}

	return (
		<div className="stars container">
			<div className="container-fluid d-flex justify-content-between">
				<Filter
					stars={stars}
					filteredTags={filteredTags}
					setFilteredTags={setFilteredTags}
					showAll={showAll}
				/>
				<div>
					<h4 className="text-muted fst-italic">Total Stars: {stars.length}</h4>
					<h5 className="mb-4 text-muted fst-italic">Filtered Stars: {filteredStars.length}</h5>
				</div>
			</div>
			<div className="row row-cols-3">
				{
					stars.length < 1
						? 'No stars'
						: filteredStars.map((star) => (<Star key={star.id} star={star} setStar={setStar} />))
				}
			</div>
		</div>
	)
}