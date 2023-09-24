import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartComponentContext = ({children}) => {
    const precioCar = []
    const productDetail = []
    const [cart, setCart] = useState([])
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(
            (item) => item.id === product.id
        )
    
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingProductIndex].quantity += product.quantity
            setCart(updatedCart)
            console.log(product)

        } else {
            setCart([...cart, product])
        }
        }
    const deleteCart = () => {
        setCart([])
    }


    cart.forEach(element => {
        const preciosumado = element.price * element.quantity
        const precioCar =preciosumado
    });
    const precioSumado = cart.reduce((total, element) => {
        const precioPorItem = element.price * element.quantity;
        return total + precioPorItem;
    }, 0);

    

    return <CartContext.Provider value ={{cart, addToCart, deleteCart, handleClose, handleShow, show,precioSumado}} >
        {children}
    </CartContext.Provider>
}
export default CartComponentContext
//ustedes van a crear un CartContext, y al componente pueden ponerle CartProvider
//- Crear el contexto (createContext).
//- Crear el provider (Context.Provider).
//- Envolver a App con el provider.