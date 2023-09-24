import { AiOutlineShoppingCart } from "react-icons/ai"
import { CartContext } from "../../CartContex/CartContex"
import { useContext, useState } from "react"
import { useParams, Link  } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'
import '../CartWidget/style.css'
import CartView from "../CartView"
const CartWidget = () => {
    const context = useContext(CartContext)
    const show = context.show

return( 
    <div>
        <button variant="primary" onClick={context.handleShow}>
            <AiOutlineShoppingCart/><Badge bg="secondary">{context.cart.length}</Badge>
        </button>
        {show && (
        <Modal show={show} onHide={context.handleClose}>
            <CartView/>
        </Modal>
        )}
    </div>
    )
}

export default CartWidget