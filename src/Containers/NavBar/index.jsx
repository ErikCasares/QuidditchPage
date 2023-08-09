import CartWidget from '../../components/CartWidget/CarWidget';
import styles from './styles.module.css'

const Navbar = () => {
return (
<nav>
    <h2>Kabum componentes</h2>
<ul>
    <li>
    <a href="#inicio">Inicio</a>
    </li>
    <li>
    <a href="#">productos</a>
    </li>
    <li>
    <a href="#">catetgorias</a>
    </li>
    <li>
    <a href="#">nosotros</a>
    </li>
    <CartWidget />
</ul>
</nav>


);
};

export default Navbar;