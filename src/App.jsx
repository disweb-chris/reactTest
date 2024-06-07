import './assets/style/App.css'
import ComponenteNuevo from './components/ComponenteNuevo'
import { useState } from 'react'

function App() {
  const [cantidad, setCantidad] = useState(0)
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = (e) => {
    if(e.target.getAttribute("name") == "a4") console.log("Soy el 4")
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    if(e.target.value == "pepeloco") alert("SOS UN CRACK")
  }

  const contarOvejas = (e) => {
    setCantidad(cantidad+1)
  }


  return (
    <>
      <h1 className='app-titulo'>Hola mundo desde React!!</h1>
      <p>Te queremos Vite y React</p>
      <ComponenteNuevo></ComponenteNuevo>

      <button onClick={handleClick} name='a4'>Apretame 4</button>
      <input type="text" onChange={handleChange} />

      

      <button onClick={contarOvejas}>Contar</button>
      <h2>Tengo {cantidad} ovejitas</h2>
    </>
  )
}

export default App
