import { useState } from "react";

function Edad(props) {
    const {setearEdad} = props

    const pasoPrevio = ()=> {
        setearEdad(anos)
    }

    const [anos, setAnos] = useState(0)
    const guardarEdad = (e)=> {
        setAnos(e.target.value)
        console.log("Años: ", e.target.value)
    }

    return ( <>
    <input type="text" onChange={guardarEdad} />
    <button onClick={pasoPrevio}>Setear Edad</button>
    </> );
}

export default Edad;