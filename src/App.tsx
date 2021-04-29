import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Stars } from './Stars'
import { User } from './User'
import { Footer } from './Footer'
import { GetStars } from './GetStars'
import 'bootstrap/dist/css/bootstrap.min.css'
// import starDataWithTags from './star-data-with-tags.json'

export function App() {
  // const [username, setUsername] = useState<string>('')
  // const [stars, setStars] = useState(starDataWithTags)
  const [stars, setStars] = useState(() => JSON.parse(localStorage.getItem('stars')) || '')
  const [username, setUsername] = useState(() => (JSON.parse(localStorage.getItem('username')) || ''))
  const [allTags, setAllTags] = useState([])

  useEffect(() => {
    console.log('render')
    localStorage.setItem('stars', JSON.stringify(stars))
    localStorage.setItem('username', JSON.stringify(username))
    getAllTags(stars)
  }, [stars, setStars, username, setUsername])

  function getAllTags(stars) {
    const allTags = []
    stars.map((star): void => {
      (star.tags.map(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag)
        }
      }))
    })
    console.log({ allTags })
    setAllTags(allTags)
  }

  return (
    <Router>
      <nav className="navbar">
        <Link to='/github-star-tags'>Home</Link>
        <Link to={'/github-star-tags/user/' + username}>User</Link>
      </nav>
      <Route path='/github-star-tags' exact render={() => (
        <div className="index">
          <GetStars
            username={username}
            setStars={setStars}
            getAllTags={getAllTags}
          />
          <User
            username={username}
            setUsername={setUsername}
          />
          <br />
          <Footer />
        </div>
      )}
      />
      <Switch>
        <Route path='/github-star-tags/user/:user' render={() =>
          <Stars
            stars={stars}
            setStars={setStars}
            allTags={allTags}
          />}
        />
      </Switch>
    </Router>
  )
}