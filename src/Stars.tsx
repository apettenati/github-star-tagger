// import starData from './star-data.json'
import starDataWithTags from './star-data-with-tags.json'
import { useState } from 'react'
import { Star } from './Star'

export function Stars() {
// const newStarData = starData.map((star) => ({ ...star, tags: [] as string[] }))
// const newStarData = []

// if (!localStorage.getItem('stars')) {
//   localStorage.setItem('stars', JSON.stringify(newStarData))
// }

// const [ stars, setStars ] = useState(JSON.parse(localStorage.getItem('stars')))

// const [stars, setStars] = useState(newStarData)
const [stars, setStars] = useState(starDataWithTags)

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