import styles from './styles.module.css'



const Item = (props) => {
const {productos} = props; 
    
    
    return(
        <>
    <h3>Lista de Escobas</h3>
        <ul className="lista-escobas">
        {productos.map(producto => (
            <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            </li>
        ))}
        </ul>
        </>
    );
}


export default Item