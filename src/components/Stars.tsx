import { Star } from './Star'
import { Filter } from './Filter'
import { useEffect, useState } from 'react'

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

	function goToNextPage() { setCurrentPage((page) => page + 1) }

	function goToPreviousPage() { setCurrentPage((page) => page - 1) }

	function changePage(event) {
		console.log({ event })
		const pageNumber = Number(event.target.textContent)
		setCurrentPage(pageNumber)
	}

	function getPageStars() {
		const firstStar = currentPage * STARS_PER_PAGE - STARS_PER_PAGE
		// console.log({ firstStar })
		const lastStar = firstStar + STARS_PER_PAGE
		// console.log({ lastStar })
		// console.log({ lastPage })
		return visibleStars.slice(firstStar, lastStar)
	}

	function getPaginationGroup() {
		return Array.from({ length: lastPage }, (_, i) => i + 1)
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
				{getPageStars().map((star, i) => (
					<Star key={i} star={star} setStar={setStar} />
				))}
			</div>

			{/* TODO: route current page */}
			<nav>
				<ul className="pagination mt-4 d-flex justify-content-center">

					<li key='previous' className="page-item"><button className={`page-link ${currentPage === 1 ? 'disabled' : ''}`} onClick={goToPreviousPage}>Previous</button></li>

					{getPaginationGroup().map((star, i) => (
						<li key={star} className="page-item">
							<button
								key={star}
								onClick={changePage}
								className={`page-link ${currentPage === star ? 'active' : null}`}
							>
								<span>{star}</span>
							</button>
						</li>
					))}
					<li key='next' className="page-item"><button onClick={goToNextPage} className={`page-link ${currentPage === lastPage ? 'disabled' : ''}`} >Next</button></li>

				</ul>
			</nav>

		</div>
	)
}