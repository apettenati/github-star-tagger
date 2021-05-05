import starDataWithTags from './star-data-with-tags.json'
import { useHistory } from 'react-router-dom'

export function Demo({ setStars, setUsername }) {
  const history = useHistory()

  function onClick() {
    setUsername('demo')
    setStars(starDataWithTags)
    // setTimeout(() => {
      history.push(`/github-star-tagger/user/demo`)
    // }, 2000)
  }

  return (
    <button
      className="col-2 mx-auto mt-4 btn btn-outline-dark"
      onClick={onClick}>
      Use Demo Data
    </button>
  )
}