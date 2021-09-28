import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './Nav'
import { Home } from './Home'
import { Stars } from './Stars'
import { Footer } from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export function App() {
	const [username, setUsername] = useState(() => (JSON.parse(localStorage.getItem('username')) || ''))
	const [stars, setStars] = useState(() => [])
	const [tags, setTags] = useState(() => JSON.parse(localStorage.getItem(`tags:${username}`)) || {})

	useEffect(() => {
		// save username to local storage
		localStorage.setItem('username', JSON.stringify(username))
	}, [username])

	useEffect(() => {
		// get just tag data from stars and save tags
		setTags({ 'stars': stars.map((star) => ({ 'starID': star.id, 'tags': star.tags })) })
	}, [stars])

	useEffect(() => {
		localStorage.setItem(`tags:${username}`, JSON.stringify(tags))
		// FIXME: do NOT include username in dependency array since it is unique by user
	}, [tags])


	return (
		<Router>
			<div className="container py-3">
				<Nav username={username} />
				<Route path='/github-star-tagger' exact render={() => (
					<Home
						username={username}
						setUsername={setUsername}
						setStars={setStars}
					/>
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