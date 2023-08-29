/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = (props) => {
    const [productDetail, setProductDetail] = useState({})
    const{id} = useParams()
    const addToCart= props.addToCart
    useEffect(()=> {
    const getProductos = async() =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const productos = await response.json()
        const filteredItem = productos.find(productos => productos.id == id)
        if (filteredItem) 
            setProductDetail(filteredItem)
    }
            getProductos()
        }, [id])
    
    return (
    <>
        <ItemDetail productDetail={productDetail} addToCart={addToCart} />
    </>
    )
}
export default ItemDetailContainer 