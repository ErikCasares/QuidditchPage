import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    return(
    <div>
        <a href="http://"><AiOutlineShoppingCart/>
        <div className={['count-products']}>
						<span >{7}</span>
					</div>
        </a>
        

    </div>
    )
}

export default CartWidget