import { Link } from 'react-router-dom'

export function Nav({ username }) {
	return (
		<header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
			<Link to='/github-star-tagger' className="d-flex align-items-center text-dark text-decoration-none">
				<span className="fs-4">GitHub Star Tagger</span>
			</Link>

			<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
				<Link to='/github-star-tagger' className="me-3 py-2 text-dark text-decoration-none" >Home</Link>
				<Link to={'/github-star-tagger/user/' + username} className="me-3 py-2 text-dark text-decoration-none" >Stars</Link>
			</nav>
		</header>
	)
}