import './App.css'
import { CartComponentContext } from './CartContex/CartContex'
import Router from './components/router/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext } from 'react'
import { useState } from 'react'
import { db } from "./firebase/cliente"
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { useEffect } from 'react'



function App() {

const productsRef = collection(db, "products")

const getProducts = async () => {
    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
    console.log(data)
}

return (
    <CartComponentContext>
        <Router/>
    </CartComponentContext>
)
}

export default App