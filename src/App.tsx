import { useState } from 'react';
import { Stars } from './Stars'
import 'bootstrap/dist/css/bootstrap.min.css'

export function App() {
  const [username, setUsername] = useState('apettenati')
  // const [username, setUsername] = useState('nathanph')

  return (
    <div>
      <div>
        <p>Current Username: {username}</p>
        <button onClick={() => setUsername(prompt("Username", username))}>Set Username</button>
        {/* <button onClick={getStarData}></button> */}
      </div>
      <br />
      <Stars username={username}/>
    </div>
  )
}