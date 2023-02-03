import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentInfo from './components/ResidentInfo'
import getRandomLocation from "./utils/getRandomLocation"

function App() {

  const [location, setLocation] = useState()
  const [numberLocation, setNumberLocation] = useState(getRandomLocation())
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(url)
    .then(res => {
      setLocation(res.data)
      setHasError(false)
    })
    .catch(err =>{ 
      console.log(err)
      setHasError(true)
    })

  }, [numberLocation])

  const handleSubmit = e =>{
    e.preventDefault()
    setNumberLocation(e.target.inputLocation.value.trim())
    e.target.inputLocation.value = e.target.inputLocation.value.trim()
  }

  console.log(numberLocation);

  return (
    <div className="app">
      <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' id='inputLocation' type="text" placeholder='Search from 1 to 126' />
        <button className='form__btn'>Search</button>
      </form>
      {
        hasError ?
          <h2 className='app__error'>❌ Hey! you must provide an id from 1 to 126 🥺</h2>
        :
          <>
            <LocationInfo location={location} />
            <div  className='resident__container'>
              {
                location?.residents.map(url => (
                  <ResidentInfo
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )

}

export default App
