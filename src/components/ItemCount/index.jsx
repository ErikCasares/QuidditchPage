import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const ItemCount = ({ productDetail, addToCart})=>{
    const [contador, setContador] = useState(1)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        if (contador>0){
        setContador(contador-1) } else{}
    }
    
    const add = () => {
        setContador(1)
        addToCart(productDetail)
    }

return (
<>
<p>cantidad a agregar= {contador}</p>
<ButtonGroup aria-label="Basic example">
                    <Button className='btn' onClick={sumar}>+</Button>
                    <Button className='btn' onClick={restar}>-</Button>
                    <Button className='btn' onClick={add}>agregar al carrito</Button>
                    </ButtonGroup>
</>
)
}
export default ItemCount