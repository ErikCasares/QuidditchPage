import CartWidget from '../../components/CartWidget/CarWidget';
import styles from './styles.module.css'


const Navbar = () => {


    const estilo = {
        backgroundColor: 'rgb(2, 169, 211)',
        display: 'flex',
        
        padding: '10px',
        borderRadius: '5px',
    };

    const nav = <>
    <ul className="nav">
    <li>
    <a className='link' href="#inicio">Inicio</a>
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
</ul></>
return (
<>
    <h1>Artículos de Calidad para Quidditch</h1>
    {nav}
</>


);
};

export default Navbar;