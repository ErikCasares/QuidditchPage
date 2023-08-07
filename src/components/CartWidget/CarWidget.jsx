import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    return(
    <div>
        <AiOutlineShoppingCart/>
        <div className={['count-products']}>
						<span >{7}</span>
					</div>
    </div>
    )
}

export default CartWidget