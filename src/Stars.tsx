// import starData from './star-data.json'
import starDataWithTags from './star-data-with-tags.json'
import { useState } from 'react'
import { Star } from './Star'
import { GetStars } from './GetStars'

export function Stars({ username }) {
  // const newStarData = starData.map((star) => ({ ...star, tags: [] as string[] }))
  // const newStarData = []

  // if (!localStorage.getItem('stars')) {
  //   localStorage.setItem('stars', JSON.stringify(newStarData))
  // }

  // const [ stars, setStars ] = useState(JSON.parse(localStorage.getItem('stars')))

  // const [stars, setStars] = useState(newStarData)
  const [stars, setStars] = useState(starDataWithTags)

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
    // console.log('url: ', url)
    // get API link data from header
    const lastPage = await getLastPage(url)
    console.log('last page from getLastPage', lastPage)
    // loop through all star pages and append json response to array of stars
    const starData = []
    for (pageNumber; pageNumber <= lastPage; pageNumber++) {
      // console.log('page number: ', pageNumber)
      // console.log('url: ', url)
      url = `https://api.github.com/users/${username}/starred?per_page=100&page=${pageNumber}`
      let data: object = await getResponseObject(url)
      starData.push(data)
      // console.log('for loop:', pageNumber, starData)
    }
    console.log('final starData: ', starData)
    return starData
  }

  function addTag(event) {
    event.preventDefault()
    const id = Number(event.target.id)
    const newTag = event.target['add-tag'].value.trim()
    if (newTag === '') {
      alert('Please enter text to add a new tag')
      return
    }
    stars.forEach((star) => {
      if (star.id === id) {
        if (star.tags.includes(newTag)) {
          alert('Tag already assigned to this star')
          return
        }
        else {
          setStars(stars.map((star) => star.id === id ?
            { ...star, tags: [...star.tags, newTag] }
            : star
          ))
        }
      }
    })
  }

  function removeTag(starID, removedTag) {
    setStars(stars.map((star) => star.id === starID ?
      { ...star, tags: (star.tags.filter((tag) => tag !== removedTag)) }
      : star
    ))
  }

  return (
    <>
      <GetStars
        username={username}
        setStars={setStars}
      />
      <h3>Your Stars</h3>
      <h4>Total Stars: {stars.length}</h4>
      <div>
        <div className="row row-cols-1 row-cols-lg-4 gap-3">
          {stars.map((star) => (
            <Star
              key={star.id}
              star={star}
              addTag={addTag}
              removeTag={removeTag}
            />
          ))}
        </div>
      </div>
    </>
  )
}