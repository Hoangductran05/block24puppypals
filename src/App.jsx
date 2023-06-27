import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppyList)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  function handleClose() {
    setFeatPupId(null);
  }

  return (
    <>
      <div className='App'>
        {
           puppies.map((puppy) => {
            return <p 
            className={`puppy ${puppy.id === featPupId ? 'featured' : ''}`} 
            onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && featuredPup && (
          <div className='popup'>
           
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
            <button className='close-button' onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
     
     
      
    </>
  )
}

export default App
