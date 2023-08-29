import { Link } from 'react-router-dom'
import CartWidget from '../../components/CartWidget/index'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/esm/Button'
/* eslint-disable react/prop-types */


const NavBar = ({cart,deleteCart}) => {

	return (
		<Navbar expand="lg" className="bg-body-tertiary fixed-top">
			<Container>
				<Navbar.Brand  as ={Link} to="/"> Quidditch</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
				<Nav className='me-auto'>
					<Nav.Link as ={Link} to="category/men's clothing">men's clothing</Nav.Link>
					<Nav.Link as ={Link} to="category/jewelery">jewelery</Nav.Link>
					<Nav.Link as ={Link} to="category/women's clothing">ropa de mujer</Nav.Link>
					<Nav.Link as ={Link} to="category/electronics">electronicos</Nav.Link>
				</Nav>
				</Navbar.Collapse>
				<CartWidget cart={cart}/>
				<Button onClick={deleteCart}></Button>
			</Container>
		</Navbar>
	)
}

export default NavBar