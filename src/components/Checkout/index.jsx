import { CartContext } from "../../CartContex/CartContex"
import { useContext, useState } from "react"
import CartView from "../CartView"
import {getDocs, collection, query, where, limit, getDoc, doc, addDoc, updateDoc, writeBatch } from 'firebase/firestore'
import {db} from "../../firebase/cliente"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
function UserProfile() {
    const [user, setUser] = useState({})
    const context = useContext(CartContext)
    const itemCart = context.cart
    const [order, setOrder] = useState({})
    const [comprador, setComprador] = useState({
        nombre: '',
        telefono: '',
        correo: '',
    })



      // Funciones para manejar los cambios en los inputs
    function handleNombreChange(event) {
        setComprador({ ...comprador, nombre: event.target.value })
    }
    
    function handleTelefonoChange(event) {
        setComprador({ ...comprador, telefono: event.target.value })
    }
    
    function handleCorreoChange(event) {
        setComprador({ ...comprador, correo: event.target.value })
    }

    const createOrder = () => {
        if (comprador.nombre.trim() === '' || comprador.telefono.trim() === '' || comprador.correo.trim() === ''|| context.precioSumado<50  ) {
            Swal.fire({
                title: 'Error',
                text: 'completar con datos validos',
                icon: 'error',
                confirmButtonText: 'OK'
            })}
            else{
        const order = {
        
        buyer: {name: comprador.nombre, phone: comprador.telefono, email: comprador.correo},
        items: itemCart,
          // items: cart
        total: context.precioSumado
          // total: totalCart
        }
        Swal.fire({
            title: 'Orden de compra generada!',
            text: 'luego se procedera con el pago via mail',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        console.log(context.precioSumado)
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order).then(({id}) =>mostrarorden(id))
        context.deleteCart()

    }}
    const mostrarorden = (id) =>{
        const productRef = doc(db, "orders", id)
        getDoc(productRef).then((snapshot => {
            if(snapshot.exists()){
                console.log( { id: snapshot.id, ...snapshot.data() } )
            }
        }))
    }
    
    

    return (
        <div className="holamundo">
            <CartView/>
            <h3>Completa con tus datos</h3>
            <div>
            <input
                type="text"
                placeholder="Nombre"
                value={comprador.nombre}
                onChange={handleNombreChange}
            />
            <input
                type="number"
                placeholder="Teléfono"
                value={comprador.telefono}
                onChange={handleTelefonoChange}
            />
            <input
                type="email"
                placeholder="Correo Electrónico"
                value={comprador.correo}
                onChange={handleCorreoChange}
            />
        
              {/* Botón para guardar la orden de compra */} 
            { context.precioSumado<50  ? (
        <button onClick={createOrder}>Guardar Orden de Compra</button>
        ) : (
        <Link to="/"><button onClick={createOrder}>Guardar Orden de Compra</button></Link>
        )}
            
            </div>
        </div>
    )
}

export default UserProfile