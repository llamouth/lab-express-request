import { useEffect, useState } from 'react'
import '../styles/App.scss'

function App() {

  const [backendData, setBackendData] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/pokemon')
    .then(response => {
      console.log('Raw response:', response);  // Log the raw response for debugging
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      setBackendData(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      setError(error.message);
    });
  }, []);

  return (
    <>
     
    </>
  )
}

export default App
