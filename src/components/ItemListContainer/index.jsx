import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const {id} = useParams()
    
    useEffect(()=> {
        const getProductos = async() =>{
            setCargando(true)
            const response = await fetch('https://fakestoreapi.com/products')
            const productos = await response.json()
            const filteredProductos = productos.filter(productos => productos.category == id)
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
        <Card style={{ width: '18rem' }} key={productos.id}>
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