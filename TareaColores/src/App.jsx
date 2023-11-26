import{} from 'react'
import Colores from './Colores'

function App() {
  
  const colores = ["Rojo", "Verdde","Azul","Aamarillo"]

  return (
    <>
    <div className='container'>
        <Colores colores={colores}/>
     </div>
    </>
  )
}

export default App
