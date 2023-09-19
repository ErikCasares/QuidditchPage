/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemCount from '../ItemCount'



const ItemDetail = ({ productDetail}) =>{
    return(
        <Container fluid className='mt4'> 
        <Row>
            <Card style={{ width: '50rem' }}>
                <Row>
                <Col><Card.Img variant="top" border="secondary" src={productDetail.image} /></Col>
                <Col>                <Card.Body>
                    <Card.Title>{productDetail.title}</Card.Title>
                    <Card.Text>
                    {productDetail.description}
                    <br/>${productDetail.price}
                    </Card.Text>
                    <ItemCount  productDetail={productDetail}/>
                </Card.Body></Col>
                </Row>
            </Card>
        </Row>
        </Container> 
    )
    
}

export default ItemDetail