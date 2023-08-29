import ItemListContainer from '../ItemListContainer'
import ItemDetailContainer from '../ItemDetalContainer'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import NavBar from '../NavBar'
import { useState } from 'react'



export default function Router() {
const productDetail = []
    const [cart, setCart] = useState([])
    const addToCart = (productDetail) => {
        setCart([...cart,productDetail])
        console.log(cart.length)
        console.log(cart)
    }
    const deleteCart = () => {
        setCart(["0"])
    }
    return(
        <BrowserRouter>
            <NavBar cart={cart} delete={deleteCart}/>
            <Routes>
                <Route path="/" element={<ItemListContainer addToCart={addToCart}/>} />
                <Route path="/category/:id" element={<ItemListContainer  addToCart={addToCart}/>} />
                <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart}/>} />
            </Routes>
        </BrowserRouter>
    )
}


