import { useState } from 'react'
import styles from './styles.module.css'


const ItemTarea = ({nombre, deleteItem}) => {

    const[marcado, setMarcado] = useState(false)

    return(
        <div className={marcado ? styles['contenedor-marcado'] : styles['contenedor']}>
            <p>{nombre}</p>
            <button onClick={() => deleteItem(nombre)}>Borrar</button>
            <button onClick={() => setMarcado(!marcado)}>{marcado ? 'Done':'To Do'}</button>
        </div>
    )
}


export default ItemTarea