/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { db } from "../../firebase/cliente"
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = (props) => {
    const [productDetail, setProductDetail] = useState({})
    const{id} = useParams()
    const productsRef = collection(db, "products")
    const addToCart= props.addToCart
    useEffect(()=> {
        const getProductos = async() =>{
            const data = await getDocs(productsRef)
            const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
            const productos = dataFiltrada
            const filteredItem = productos.find(productos => productos.id == id)
        if (filteredItem) 
            setProductDetail(filteredItem)
        }
            getProductos()
    }, [id])
    
    return (
    <>
        <ItemDetail productDetail={productDetail}/>
    </>
    )
}
export default ItemDetailContainer 