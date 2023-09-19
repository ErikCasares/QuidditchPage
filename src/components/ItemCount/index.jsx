import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { CartContext } from "../../CartContex/CartContex"
import { useContext, useState } from "react"

const ItemCount = ({ productDetail})=>{
    const context = useContext(CartContext)
    const [contador, setContador] = useState(1)

    const [quantity, setQuantity] = useState(1)
    
    const handleAddToCart = () => {
        context.addToCart({ ...productDetail, quantity })
        setQuantity(1);
    }
    



    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        if (contador>0){
        setContador(contador-1) } else{}
    }
    
    const add = () => {
        setContador(1)
        context.addToCart(productDetail)
    }

return (
<>
<ButtonGroup aria-label="Basic example">
<input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
                    <Button className='btn'variant="dark" onClick={handleAddToCart}>agregar al carrito</Button>
                    </ButtonGroup>
</>
)
}
export default ItemCount