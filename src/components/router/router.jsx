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
import { useEffect } from 'react'
import UserProfile from '../component'
import CartView from '../CartView'

export default function Router() {

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/:id" element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    )
}


