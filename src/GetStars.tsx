import { Button } from 'react-bootstrap'

export function GetStars({ username, setStars }) {

  async function getResponseObject(url: string) {
    // get the json response containing user star data from provided url
    const response = await fetch(url)
    if (response.ok) {
      const json = await response.json()
      // console.log('json response', json)
      return json
    }
    throw new Error('Failed to get response object')
  }

  async function getLastPage(url: string) {
    // get link data, identify the last URL, and return the page number
    const response = await fetch(url)
    if (response.ok) {
      const links = response.headers.get('Link')
      const regex = '.*page=(.*)>; rel="last"'
      const lastPageNumber = parseInt(links.match(regex)[1])
      // setLastPage(lastPageNumber)
      return lastPageNumber
    }
    throw Error('Failed to get last page')
  }

  async function getStarData() {
    // initialize first link with username
    let pageNumber = 1
    let url = `https://api.github.com/users/${username}/starred?per_page=100&page=${pageNumber}`
    // get API link data from header
    const lastPage = await getLastPage(url)
    console.log('last page from getLastPage', lastPage)
    // loop through all star pages and append json response to array of stars
    const starData = []
    for (pageNumber; pageNumber <= lastPage; pageNumber++) {
      url = `https://api.github.com/users/${username}/starred?per_page=100&page=${pageNumber}`
      let data = await getResponseObject(url)
      starData.push(...data)
    }
    console.log(starData)
    const newStarData = starData.map((star) => ({ ...star, tags: [] as string[] }))
    console.log({newStarData})
    setStars(newStarData)
  }

  return (
      <Button onClick={getStarData}>Get Star Data</Button>
  )
}