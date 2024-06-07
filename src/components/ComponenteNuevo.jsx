import style from '../assets/style/ComponenteNuevo.module.css'
import ComponenteHijo from './ComponenteHijo';

function ComponenteNuevo() {
    return (<><h2 style= {{ borderBottom:'solid 1px white', paddingBottom: '15px' }} className={style.fondo}>.. Desde el componente nuevo ..</h2>
    <ComponenteHijo></ComponenteHijo> </>);
}

export default ComponenteNuevo;