import CartWidget from '../../components/CartWidget/index';
import styles from './styles.module.css'


const Navbar = () => {

const nav = <>
	<nav>
		<li>
			<a href="#inicio">Escobas</a>
		</li>
		<li>
			<a href="#">Tunicas</a>
		</li>
		<li>
			<a href="#">quaffles</a>
		</li>
		<li>
			<a href="#">bludgers</a>
		</li>
		<CartWidget />
	</nav>
</>
return (
<>
	<h1>Artículos de Calidad para Quidditch</h1>
	{nav}
</>


);
};

export default Navbar;