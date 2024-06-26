import { useEffect, useState } from 'react'
import '../styles/App.scss'

function App() {

  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8888/pokemon')
    .then( response => response.json() )
    .then( data => setBackendData(data) )
    .catch( error => console.error('There has been a problem with your fetch operation:', error) );
  }, []);

  return (
    <>
     <ul>
      {backendData.map(poke => {
        return <li>
          <p>{poke.name}</p>
        </li>
      })}
     </ul>
    </>
  )
}

export default App
