async function getResponseObject(url: string) {
	// get the json response containing user star data from provided url
	const response = await fetch(url)
	if (response.ok) {
		const json = await response.json()
		return json
	} else {
		throw Error('failed to fetch star data')
	}
}

async function getLastPageNumber(username: string) {
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

async function getAllStars(pages, username: string) {
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
		return starData
	} catch (error) {
		throw error
	}
}

// appends new information to the star required for this application
function modifyStarData(starData, username: string) {
	// adds a tags key initialized with an empty array
	// adds a visible key assigned to a boolean of true for filtering
	let newStarData = starData.map((star) => ({ ...star, tags: [] as string[], visible: true }))

	// check if tags for this user are already saved and adds them to the star data
	const storedData = JSON.parse(localStorage.getItem(`tags:${username}`))
	if (storedData !== null && storedData.stars) {
		newStarData.forEach((star) => {
			storedData.stars.forEach((savedStar) => {
				if (savedStar.starID === star.id) {
					star.tags = savedStar.tags
				}
				return
			})
		})
	}
	return newStarData
}


export async function getStarData(username: string) {
	// check if username is blank
	if (username === '') return

	try {
		// get API link data from header to determine how many pages to fetch
		const lastPage = await getLastPageNumber(username)
		// get star data from each API page
		const starData = await getAllStars(lastPage, username)
		// apply custom fields to star data
		const newStarData = modifyStarData(starData, username)
		return newStarData
	} catch (error) { throw error }
}
