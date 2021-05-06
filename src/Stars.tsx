import { Star } from './Star'
import { Filter } from './Filter'

export function Stars({ stars, setStars }) {
	const visibleStars = stars.filter((star) => (star.visible))

	function setStar(updatedStar) {
		setStars(stars.map((star) =>
			star.id === updatedStar.id
				? updatedStar
				: star
		))
	}

	return (
		<div className="stars container">
			<div className="container-fluid d-flex justify-content-between">
				<Filter
					stars={stars}
					setStars={setStars}
				/>
				<div>
					<h4 className="text-muted fst-italic">Total Stars: {stars.length}</h4>
					<h5 className="mb-4 text-muted fst-italic">Filtered Stars: {visibleStars.length}</h5>
				</div>
			</div>
			<div className="row row-cols-3">
				{visibleStars.map((star) => (<Star key={star.id} star={star} setStar={setStar} />))}
			</div>
		</div>
	)
}