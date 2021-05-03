import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './Nav'
import { Stars } from './Stars'
import { User } from './User'
import { Demo } from './Demo'
import { Footer } from './Footer'
import { GetStars } from './GetStars'
import 'bootstrap/dist/css/bootstrap.min.css'

export function App() {
	const [stars, setStars] = useState(() => JSON.parse(localStorage.getItem('stars')) || '')
	const [username, setUsername] = useState(() => (JSON.parse(localStorage.getItem('username')) || ''))
	const [allTags, setAllTags] = useState([])

	useEffect(() => {
		console.log('render')
		localStorage.setItem('stars', JSON.stringify(stars))
		localStorage.setItem('username', JSON.stringify(username))
		if (stars.length > 0) { getAllTags(stars) }
	}, [stars, setStars, username, setUsername])

	function getAllTags(stars) {
		const allTags = []
		if (stars.length > 1) {
			stars.map((star): void => {
				(star.tags.map(tag => {
					if (!allTags.includes(tag)) {
						allTags.push(tag)
					}
				}))
			})
			console.log({ allTags })
			setAllTags(allTags)
		}
	}

	return (
		<Router>
			<div className="container py-3">
				<Nav username={username} />
				<Route path='/github-star-tagger' exact render={() => (
					<main className="row d-flex flex-column justify-content-center">

						<div className="mb-4 mx-auto text-center">
							<h1 className="display-4 fw-normal">GitHub Star Tagger</h1>
							<p className="fs-5 text-muted">Add tags to your starred GitHub repositories!</p>
						</div>

						<GetStars
							username={username}
							setStars={setStars}
						/>

						<User
							username={username}
							setUsername={setUsername}
						/>
						<Demo
							setStars={setStars}
							setUsername={setUsername} />
					</main>
				)}
				/>
				<Switch>
					<Route path='/github-star-tagger/user/:user' render={() =>
						<Stars
							stars={stars}
							setStars={setStars}
							allTags={allTags}
						/>}
					/>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}