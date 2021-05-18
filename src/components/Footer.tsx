import { FaGithub } from 'react-icons/fa'

export function Footer() {

	return (
		<footer className="pt-4 my-md-5 pt-md-5 border-top">
			<div className="d-flex justify-content-center">
				Built by Amanda Pettenati |
				Source Code
				<a href="https://github.com/apettenati/github-star-tagger">
					<FaGithub className="ms-2" />
				</a>
			</div>
		</footer>
	)
}