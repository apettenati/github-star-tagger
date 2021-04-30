import { Star } from './Star'
import { Filter } from './Filter'
import { useState, useEffect } from 'react'

export function Stars({ stars, setStars, allTags }) {
  const [filteredTags, setFilteredTags] = useState([])
  const [filteredStars, setFilteredStars] = useState(stars)

  useEffect(() => {
    console.log({ filteredTags })
    filterStars()
  }, [filteredTags, stars])

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

  function filterStars() {
    if (filteredTags.length < 1) {
      setFilteredStars(stars)
    } else {
      const currentTags = filteredTags.map((tag) => tag.value)
      const filter = stars.filter((star) => {
        return star.tags.some((s) => currentTags.includes(s))
      })
      console.log({ filter })
      setFilteredStars(filter)
    }
  }

  function filterNoTags() {
    const noTags = stars.filter((star) => star.tags.length === 0)
    setFilteredStars(noTags)
  }

  function removeFilterNoTags() {
    setFilteredStars(stars)
  }

  return (
    <div className="stars">
      <h3>Your Stars</h3>
      <h4 className="text-muted fst-italic">Total Stars: {stars.length}</h4>
      <h5 className="mb-4 text-muted fst-italic">Filtered Stars: {filteredStars.length}</h5>
      <Filter allTags={allTags} setFilteredTags={setFilteredTags} filterNoTags={filterNoTags} removeFilterNoTags={removeFilterNoTags} />
      <div>
        <div className="row row-cols-1 row-cols-lg-4 gap-3">
          {(stars.length < 1 ? 'No stars' :
            filteredStars.map((star) => (
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