import { CartContext } from "../../CartContex/CartContex"
import { useContext, useState } from "react"
import { useParams, Link  } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'
const CartView = () => {
    const context = useContext(CartContext)
    const{id} = useParams()

 const remove = (parameter) => {
    const updateCart = itemCart.map((item) =>{
        console.log(item.id)
        if(item.id === parameter) {
            console.log(item.quantity, "de aca hay que borrar")
            return{...item, quantity: item.quantity-1}
        }
        else{
            console.log(item.id, "no es este el que hayt que borrar")
        }
        return item
    })
 }


return(
    <> 
        

                <Modal.Title>Carrito</Modal.Title>

            
            <Modal.Body>{context.cart.map((carrito, index) => (
        <div key={index}>
            <ListGroup>
                <ListGroup.Item><p>{carrito.title}   -${carrito.price}</p>
                <p>cantidad:{carrito.quantity}</p>
                <p className="precio">${carrito.price*carrito.quantity}<button onClick={() => remove(carrito.id)}>quitar</button></p></ListGroup.Item>
            </ListGroup>
        </div>
    ))}
    </Modal.Body>
            <Modal.Footer>
            <p>
        Total: ${context.precioSumado}
</p>
        <Link to={`/`}><Button variant="danger" size="sm" onClick={context.handleClose}>
                seguir comprando
                </Button></Link>
                <Link to={`/buy`}>{id === "buy" ? ("") :(console.log(id), <Button variant="success" onClick={context.handleClose}>
                    Pasar por caja
                </Button>)}</Link>              
            </Modal.Footer>
    </>
)
}
export default CartView