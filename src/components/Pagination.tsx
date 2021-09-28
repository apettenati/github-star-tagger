export function Pagination({ setCurrentPage, lastPage, currentPage }) {
	const goToNextPage = () => { setCurrentPage((page) => page + 1) }
	const goToPreviousPage = () => { setCurrentPage((page) => page - 1) }

	function changePage(event) {
		const pageNumber = Number(event.target.textContent)
		setCurrentPage(pageNumber)
	}

	function getPaginationGroup() {
		return Array.from({ length: lastPage }, (_, i) => i + 1)
	}


	return (
			<nav>
				{(lastPage > 1) &&
				<ul className="pagination mt-4 d-flex justify-content-center">

					<li key='previous' className="page-item"><button className={`page-link ${currentPage === 1 ? 'disabled' : ''}`} onClick={goToPreviousPage}>Previous</button></li>

					{getPaginationGroup().map((star) => (
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
				}
			</nav>
	)
}