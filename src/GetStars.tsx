import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export function GetStars({ username, setStars, getAllTags }) {

	const [loading, isLoading] = useState(false)
	const history = useHistory()

	async function getResponseObject(url: string) {
		// get the json response containing user star data from provided url
		const response = await fetch(url)
		console.log({ response })
		if (response.ok) {
			const json = await response.json()
			return json
		} else {
			return -1
		}
	}

	async function getLastPage(url: string) {
		// get link data, identify the last URL, and return the page number
		const response = await fetch(url)
		if (response.ok) {
			const links = response.headers.get('Link')
			console.log({links})
			const regex = '.*page=(.*)>; rel="last"'
			const lastPageNumber = parseInt(links.match(regex)[1])
			return lastPageNumber
		} else {
			return -1
		}
	}

	async function getStarData() {
		if (username === '') {
			alert('Username is blank. Please update username then try again.')
			return
		}
		isLoading(true)
		// TODO: validate username against github api
		// initialize first link with username
		let pageNumber = 1
		let url = `https://api.github.com/users/${username}/starred?per_page=100&page=${pageNumber}`
		// get API link data from header
		const lastPage = await getLastPage(url)
		if (lastPage === -1) {
			alert('User does not exist')
			isLoading(false)
			return
		}
		console.log('last page from getLastPage', lastPage)
		// loop through all star pages and append json response to array of stars
		const starData = []
		for (pageNumber; pageNumber <= lastPage; pageNumber++) {
			url = `https://api.github.com/users/${username}/starred?per_page=100&page=${pageNumber}`
			const data = await getResponseObject(url)
			if (data === -1) {
				alert('Failed to retrieve star data')
				isLoading(false)
				return
			}
			starData.push(...data)
		}
		const newStarData = starData.map((star) => ({ ...star, tags: [] as string[], show: true }))
		console.log({ newStarData })
		setStars(newStarData)
		getAllTags(newStarData)
		isLoading(false)
		history.push(`/github-star-tagger/user/${username}`)
	}

	return (
		<button type="button" className="col-4 mx-auto mb-4 btn btn-lg btn-primary" onClick={getStarData}>
			{loading ?
				<Spinner animation="border" role="status" /> :
				'Get Star Data'}
		</button>
	)
}