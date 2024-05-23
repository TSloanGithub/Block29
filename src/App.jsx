import { useState, useEffect } from 'react'
import './App.css'
import {getPuppyPlayers} from './API/index.js'

function App() {
  const[puppies, setPuppies] = useState([]);
  console.log(puppies);
  useEffect(()=>{
    const fetchPlayers= async()=>{
      try{const getPuppyPlayers1 = await getPuppyPlayers();
        setPuppies(getPuppyPlayers1);
      }catch(e){
        console.error('Failed to get all puppies')
        console.error(e);
      }
    }
    fetchPlayers();
  },[])
  return (
    <>
    <div>
    </div>
    </>
  )
}

export default App
