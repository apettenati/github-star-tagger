import { Star } from './Star'
import { Filter } from './Filter'
import { useState, useEffect } from 'react'

export function Stars({ stars, setStars, allTags }) {
  const [filteredTags, setFilteredTags] = useState([])

  useEffect(() => {
    console.log({ filteredTags })
    filterStars(filteredTags, stars)
  }, [filteredTags])

  function addTag(id, newTag) {
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

  function removeTag(id, removedTag) {
    setStars(stars.map((star) => star.id === id ?
      { ...star, tags: (star.tags.filter((tag) => tag !== removedTag)) }
      : star
    ))
  }
  
  function filterStars(filteredTags, stars) {
    if (filteredTags.length < 1) return stars

    const filteredStars = filteredTags.map((tag) => {
      stars.filter((star) => star.tags.includes(tag.value))
    })
    console.log({ filteredStars })

    // setFilteredStars(filteredStars)
  }

  return (
    <div className="stars">
      <h3>Your Stars</h3>
      <h5 className="mb-4 text-muted fst-italic">Stars: {stars.length}</h5>
      <Filter allTags={allTags} setFilteredTags={setFilteredTags} />
      <div>
        <div className="row row-cols-1 row-cols-lg-4 gap-3">
          {/* {(filteredStars.length < 1
            ? 'No stars'
            : filteredStars.map((star) => (
              <Star
                key={star.id}
                star={star}
                addTag={addTag}
                removeTag={removeTag}
              />
            )))} */}
          {(stars.length < 1 ? 'No stars' :
            stars.map((star) => (
              <Star
                key={star.id}
                star={star}
                addTag={addTag}
                removeTag={removeTag}
              />
            )
            ))}
        </div>
      </div>
    </div>
  )
}