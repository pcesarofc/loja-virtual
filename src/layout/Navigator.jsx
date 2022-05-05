import { React } from '../config/configComponents';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navigator = () => {
    return <nav className="navigator-page">
        <ul className="nav-menu">
            <Link to="/"><li className="nav-home">Home</li></Link>
            <Link to="/games"><li className="nav-games">Jogos</li></Link>
            <Link to="/login"><li className="nav-login">Login</li></Link>
            <Link to="/contact"><li className="nav-contact">Contato</li></Link>
        </ul>

        <Link to="/cart" className="cart"><FaShoppingCart /></Link>
    </nav>
}

export default Navigator;