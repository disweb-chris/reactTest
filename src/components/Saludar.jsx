import { useState } from "react"

function Saludar(props) {

    const [nombre, setNombre] = useState("")
    const {seteo, txtbtn, alerta, apodo, edad} = props

    const saludar = (e)=> {
        if(nombre == "pepeloco") {
            alerta()
        }
        console.log("Hola! Que tal?", nombre)
    }

    const handleInput = (e)=> {
        setNombre(e.target.value)
        seteo(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
        <input type="text" onChange={handleInput}/>
        <button onClick={saludar}>{txtbtn}</button>
        <p>Hola, gracias por visitar la pagina de {apodo} y saludarme en mi cumpleaños N* {edad}</p>
        </>
     );
}

export default Saludar;