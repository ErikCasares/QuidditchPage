import { useState } from "react"
import ItemTarea from "../../components/itemTarea/index"
import CartWidget from "../../components/CartWidget/CarWidget"
const CheckListContainer = () =>{
    const [listaDeTareas, setListaDeTareas] = useState ([])
    const [input,setInput] = useState("")  
    const cantidad = listaDeTareas.length

    const addItem = () => {
        if(input !==''){
        setListaDeTareas ([...listaDeTareas, input])
        setInput('')
        }
    }

    const deleteItem = (nombre) => {
        const nuevaListaDeTareas = listaDeTareas.filter(pr =>pr !== nombre)
        setListaDeTareas(nuevaListaDeTareas)
    }

    return(
        <div>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}>Guardar</button>
            
            {
                listaDeTareas.length > 0 ? (
                <>
                {listaDeTareas.map(tarea => <ItemTarea nombre={tarea} deleteItem={deleteItem}/>)}
                </>
            ) : (
                <p>No hay nada en la lista</p>
            )

                
            }
        </div>
        )
}







export default CheckListContainer 