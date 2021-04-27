import { useState } from 'react';
import { Stars } from './Stars'
import { User } from './User'
import 'bootstrap/dist/css/bootstrap.min.css'

export function App() {
  const [username, setUsername] = useState('apettenati')
  // const [username, setUsername] = useState('nathanph')

  return (
    <div>
      <div>
        <User
          username={username}
          setUsername={setUsername}
        />
      </div>
      <br />
      <Stars username={username} />
    </div>
  )
}