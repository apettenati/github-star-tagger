import { Star } from './Star'
import { Filter } from './Filter'
import { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

export function Stars({ stars, setStars }) {
	const visibleStars = stars.filter((star) => (star.visible))
	const STARS_PER_PAGE = 100
	const [lastPage] = useState(Math.ceil(stars.length / STARS_PER_PAGE))
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		window.scrollTo({ behavior: 'smooth', top: 0 })
	}, [currentPage])

	function setStar(updatedStar) {
		setStars(stars.map((star) =>
			star.id === updatedStar.id
				? updatedStar
				: star
		))
	}

	function getPageStars() {
		const firstStar = currentPage * STARS_PER_PAGE - STARS_PER_PAGE
		const lastStar = firstStar + STARS_PER_PAGE
		return visibleStars.slice(firstStar, lastStar)
	}

	return (
		<div className="user container">

			<div className="container-fluid d-flex justify-content-between">
				<Filter
					stars={stars}
					setStars={setStars}
				/>
				<div className="star-counts">
					<h4 className="mb-3 text-muted fst-italic">Total Stars: {stars.length}</h4>
					<h5 className="text-muted fst-italic">Filtered Stars: {visibleStars.length}</h5>
				</div>
			</div>

			<div className="stars row">
				{getPageStars().map((star) => (
					<Star key={star.id} star={star} setStar={setStar} />
				))}
			</div>

			<Pagination
				setCurrentPage={setCurrentPage}
				lastPage={lastPage}
				currentPage={currentPage}
			/>

		</div>
	)
}