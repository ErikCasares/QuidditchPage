import CartWidget from '../../components/CartWidget/CarWidget';
import styles from './styles.module.css'

const Navbar = () => {
return (
<nav className={styles['navbar navbar-expand-lg navbar-light bg-light']}>
    <div className={styles['container-fluid']}>
        <a className={styles['navbar-brand']}  href="#">Kabum</a>
        <button className={['navbar-toggler']} type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className={['navbar-toggler-icon']}></span>
        </button>
        <div className={['collapse navbar-collapse']} id="navbarSupportedContent">
            <ul className={['navbar-nav me-auto mb-2 mb-lg-0']}>

                <ul className={styles['navbar-nav']}>
                    <li className={styles['nav-item']}>
                        <a className={styles['nav-link']} href="#">consolas</a>
                    </li>
                    <li className={styles['nav-item']}>
                        <a className={styles['nav-link']} href="#">computadoras</a>
                    </li>
                    <li className={styles['nav-item dropdown']}>
                        <a className={styles['nav-link dropdown-toggle']} href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                           accesorios
                        </a>
                        <ul className={styles['dropdown-menu']} aria-labelledby="navbarDropdown">
                            <li><a className={styles['dropdown-item']} href="#">auriculares</a></li>
                            <li><a className={styles['dropdown-item']} href="#">joysticks</a></li>
                            <li><a className={styles['dropdown-item']} href="#">sillas</a></li>
                        </ul>
                    </li>

                    <li className={styles['nav-item']}>
                        <a className={styles['nav-link']} href="#">
                            <CartWidget /></a>
                    </li>
                </ul>
            </ul>
        </div>
        </div>
</nav>


);
};

export default Navbar;