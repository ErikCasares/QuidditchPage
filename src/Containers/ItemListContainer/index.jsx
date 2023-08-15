import { useState } from "react"
import styles from './styles.module.css'
const ItemListContainer = (props) => {
const {productos} = props;

return(
<div>
    <h2>Listas de Productos</h2>
    <p>{productos}</p>
</div>
)
}
export default ItemListContainer