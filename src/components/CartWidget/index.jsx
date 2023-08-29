import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = ({cart}) => {
    return(
    <div>
        <a href=""><AiOutlineShoppingCart/>
            <div className="cart-bubble">{cart.length}</div>
        </a>
    </div>
    )
}

export default CartWidget