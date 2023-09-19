import { useState, useEffect, useContext } from "react"
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import { useParams, Link  } from "react-router-dom"
import { CartContext } from "../../CartContex/CartContex"
import { db } from "../../firebase/cliente"
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
const ItemListContainer = (props) => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const {id} = useParams()
    const productsRef = collection(db, "products")
    const addToCart = useContext(CartContext)
    useEffect(()=> {
        const getProductos = async() =>{
            setCargando(true)
            const data = await getDocs(productsRef)
            const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
            const productos = dataFiltrada
            const filteredProductos = productos.filter(productos => productos.categoryId == id)
            if (filteredProductos.length > 0) {
                setProductos(filteredProductos)
                setCargando(false)
                } else {
                setProductos(productos)
                setCargando(false)}
        }
                getProductos()
            }, [id])
return(
    <Container fluid className='mt4'> {cargando ? (
        <div><Spinner animation="border" /><p>Cargando productos...</p> </div>
        
        ) : (<Row>
        {productos.map(productos => (
        <Card border="secondary" style={{ width: '18rem' }} key={productos.id}>
            <Card.Img variant="top" src={productos.image} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text>
                ${productos.price}
                </Card.Text>
                <Link to={`/item/${productos.id}`}><Button>Mas Info</Button></Link>
            </Card.Body>
        </Card>
    ))}
    </Row>
    )}
    
    </Container>  
    )
}

export default ItemListContainer