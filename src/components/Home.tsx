import { useState } from 'react'
import { User } from './User'
import { Demo } from './Demo'
import { GetStars } from './GetStars'
import { useHistory } from 'react-router-dom'
import { getStarData } from '../utils/helperFunctions'
import 'bootstrap/dist/css/bootstrap.min.css'

export function Home({ username, setUsername, setStars }) {
	const [loading, isLoading] = useState(false)
	const history = useHistory()
	const redirectToUser = () => { history.push(`/github-star-tagger/user/${username}`) }

	async function getStars() {
		isLoading(true)
		try {
			const newStarData = await getStarData(username)
			setStars(newStarData)
			redirectToUser()
		} catch (error) {
			console.error(error)
			alert('Failed to fetch stars. Please try again.')
		}
		isLoading(false)
	}

	return (

					<main className="row d-flex flex-column justify-content-center">

						<div className="mb-4 mx-auto text-center">
							<h1 className="display-4 fw-normal">GitHub Star Tagger</h1>
							<p className="fs-5 text-muted">Add tags to your starred GitHub repositories!</p>
						</div>

						<GetStars
							getStars={getStars}
							loading={loading}
						/>

						<User
							username={username}
							setUsername={setUsername}
							getStars={getStars}
						/>
						<Demo
							setStars={setStars}
							setUsername={setUsername} />

					</main>
	)
}