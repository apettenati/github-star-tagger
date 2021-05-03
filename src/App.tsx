import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './Nav'
import { Stars } from './Stars'
import { User } from './User'
import { Footer } from './Footer'
import { GetStars } from './GetStars'
import 'bootstrap/dist/css/bootstrap.min.css'
// import starDataWithTags from './star-data-with-tags.json'

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

	return (
		<Router>
			<div className="container py-3">
				<Nav username={username} />
				<Route path='/github-star-tagger' exact render={() => (
					<main className="d-sm-flex flex-column justify-content-center">

						<div className="pricing-header p-3 pb-md-4 mx-auto text-center">
							<h1 className="display-4 fw-normal">GitHub Star Tagger</h1>
							<p className="fs-5 text-muted">Add tags to your starred GitHub repositories!</p>
						</div>

						<div className="main-card card rounded-3 shadow-sm">
							<div className="card-header py-3">
								<h2 className="my-0 fw-normal">Get Star Data</h2>
							</div>
							<div className="card-body">

								<User
									username={username}
									setUsername={setUsername}
								/>

								<GetStars
									username={username}
									setStars={setStars}
									getAllTags={getAllTags}
								/>

							</div>
						</div>

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