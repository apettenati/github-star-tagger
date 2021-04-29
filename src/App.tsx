import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Stars } from './Stars'
import { User } from './User'
import { Footer } from './Footer'
import { GetStars } from './GetStars'
import 'bootstrap/dist/css/bootstrap.min.css'
// import starData from './star-data.json'
import starDataWithTags from './star-data-with-tags.json'

export function App() {
  const [username, setUsername] = useState('')
  // const [username, setUsername] = useState('nathanph')
  // const newStarData = starData.map((star) => ({ ...star, tags: [] as string[] }))
  // const newStarData = []

  // if (!localStorage.getItem('stars')) {
  //   localStorage.setItem('stars', JSON.stringify(newStarData))
  // }

  // const [ stars, setStars ] = useState(JSON.parse(localStorage.getItem('stars')))

  // const [stars, setStars] = useState(newStarData)
  const [stars, setStars] = useState(starDataWithTags)
  // const [stars, setStars] = useState([])


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
        {/* <Route path='/github-star-tags/user/:user' render={({match}) => <Stars username={match.props.username} />} /> */}
        <Route path='/github-star-tags/user/:user' render={() => <Stars stars={stars} setStars={setStars} />} />
      </Switch>
    </Router>
  )
}