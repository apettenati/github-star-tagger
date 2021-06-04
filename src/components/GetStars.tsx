import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export function GetStars({ username, setStars }) {
	const [loading, isLoading] = useState(false)
	const history = useHistory()

	async function getStars() {
		isLoading(true)
		try {
			await setStarData()
			redirectToUser()
		} catch (error) {
			console.error(error)
			alert('Failed to fetch stars. Please try again.')
		}
		isLoading(false)
	}

	async function setStarData() {
		// check if username is blank
		if (username === '') {
			// alert('Username is blank. Please update username then try again.')
			return
		}

		try {
			// get API link data from header to determine how many pages to fetch
			const lastPage = await getLastPageNumber()
			// get star data from each API page
			const starData = await getAllStars(lastPage)
			// apply custom fields to star data
			const newStarData = modifyStarData(starData)
			// retreive existing tags from database and apply to star data
			const updatedStarData = await applyDatabaseTags(newStarData)
			setStars(updatedStarData)
		} catch (error) {
			throw error
		}
	}

	async function getResponseObject(url: string) {
		// get the json response containing user star data from provided url
		const response = await fetch(url)
		// console.log({ response })
		if (response.ok) {
			const json = await response.json()
			return json
		} else {
			throw Error('failed to fetch star data')
		}
	}

	async function getLastPageNumber() {
		let url = `https://api.github.com/users/${username}/starred?per_page=100&page=1`
		// get link data, identify the last page, and return the page number
		const DEFAULT_LAST_PAGE_NUMBER = 1
		const response = await fetch(url)
		if (response.ok) {
			const links = response.headers.get('Link')
			// links are not returned in headers if stars are only 1 page
			if (links === null) return DEFAULT_LAST_PAGE_NUMBER

			const regex = '.*page=(.*)>; rel="last"'
			const lastPageNumber = parseInt(links.match(regex)[1])
			return lastPageNumber
		} else {
			throw Error(`failed to get response from ${url}`)
		}
	}

	async function getAllStars(pages) {
		try {
			// loop through all star pages and append json response to array of stars
			let pageNumber = 1
			const starRequests = []

			for (pageNumber; pageNumber <= pages; pageNumber++) {
				const url = `https://api.github.com/users/${username}/starred?per_page=100&page=${pageNumber}`
				// const data = await getResponseObject(url)
				starRequests.push(getResponseObject(url))
			}

			const stars = await Promise.all(starRequests)
			const starData = stars.flat()
			// console.log({ starData })
			return starData
		} catch (error) {
			throw error
		}
	}

	async function getMongoData() {
		const url = `http://localhost:3001/github-star-tagger/user/${username}`
		const response = await fetch(url, {
			method: 'get',
			headers: { 'Content-type': 'application/json' }
		})
		if (response.ok) {
			const json = await response.json()
			return json
		} else {
			throw Error(`failed to get response from server`)
		}
	}

	async function applyDatabaseTags(stars) {
		const data = await getMongoData()
		const tags = data.stars
		// apply tags from database to fetched star data
		tags.forEach((tag) => {
			stars.forEach((star) => {
				if (tag.starID === star.id) {
					star.tags = tag.tags
				}
			})

		})
		console.log({ stars })
		return stars
	}

	function modifyStarData(starData) {
		// appends new information to the star required for this application
		// adds a tags key initialized with an empty array
		// adds a visible key assigned to a boolean of true
		return starData.map((star) => ({ ...star, tags: [] as string[], visible: true }))
	}

	function redirectToUser() {
		history.push(`/github-star-tagger/user/${username}`)
	}

	return (
		<button type="button" className="col-4 mx-auto mb-4 btn btn-lg btn-primary" onClick={getStars}>
			{loading
				? <Spinner animation="border" role="status" />
				: 'Get Star Data'}
		</button>
	)
}