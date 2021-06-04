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
	const [stars, setStars] = useState(() => JSON.parse(localStorage.getItem('stars')) || [])
	const [username, setUsername] = useState(() => (JSON.parse(localStorage.getItem('username')) || ''))
	const [tags, setTags] = useState(() => JSON.parse(localStorage.getItem('tags')) || [])

	useEffect(() => {
		console.log('render username')
		// save username to local storage
		localStorage.setItem('username', JSON.stringify(username))
	}, [username, setUsername])

	useEffect(() => {
		console.log('render LS')
		// save star data to local storage
		localStorage.setItem('stars', JSON.stringify(stars))
		// get just tag data from stars and save tags
		setTags({ username, 'stars': stars.map((star) => ({ 'starID': star.id, 'tags': star.tags })) })
	}, [stars, username])

	useEffect(() => {
		console.log('save tags')
		// localStorage.setItem('tags', JSON.stringify(tags))

		// save tag data to database
		const url = `http://localhost:3001/github-star-tagger/user/${username}`
		fetch(url, {
			method: 'post',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ tags })
		})

	}, [tags])


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
						/>}
					/>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}