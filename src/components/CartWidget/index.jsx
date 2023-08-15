import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from './styles.module.css'

const CartWidget = () => {
    return(
    <div>
        <a href=""><AiOutlineShoppingCart/>
            <div className="cart-bubble">7</div>
        </a>
    </div>
    )
}

export default CartWidget