import { useState } from 'react'
import { Star } from './Star'

export function Stars({ stars, setStars }) {

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

  return (
    <>
      <h3>Your Stars</h3>
      <h5 className="mb-4 text-muted fst-italic">Total Stars: {stars.length}</h5>
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