import { Spinner } from 'react-bootstrap'

export function GetStars({ getStars, loading }) {

	return (
		<button type="button" className="col-4 mx-auto mb-4 btn btn-lg btn-primary" onClick={getStars}>
			{loading
				? <Spinner animation="border" role="status" />
				: 'Get Star Data'}
		</button>
	)
}