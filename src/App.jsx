import './assets/style/App.css'
import { useState, useEffect } from 'react'
import Saludar from './components/Saludar'
import Edad from './components/edad'

function App() {

  const [nombre, setNombre] = useState("Perrito ")
  const [edad, setEdad] = useState("")
  const usuario = {apodo: "Puchi", edad: 42 }

  useEffect(()=> {
    console.log("Soy useEffect y me ejecuto")
  },[edad])



  const alerta = ()=> {
    alert("Dale wuachin! Que si podes!!")
  }
 
  return (
    <>
      <nav><button onClick={alerta}>Alerta</button></nav>
      <h1>Hola {nombre}{edad}</h1>
      <Saludar seteo={setNombre} txtbtn={"Saluda PA"} alerta={alerta} {...usuario}></Saludar>
      <Edad setearEdad = {setEdad}></Edad>
    </>
  )
}

export default App
