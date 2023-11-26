import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function container() {

  const [On, setOn] = useState(true);

  return(
    <div className='container'>
      {
        On?<h1>Apagada</h1>:<h1>Encendida</h1> 
      }
      <button onClick={()=>setOn(!On)}>¿La luz esta?</button>
    </div>
  )
}

export default container
