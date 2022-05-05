import { React, DropdownNav } from '../config/configComponents';
import { Link } from 'react-router-dom';
import { FaShoppingCart, BiHome, SiNintendoswitch, MdLogin, RiContactsFill } from '../config/configIcons';


const Navigator = () => {

    return <nav className="navigator-page">

        <DropdownNav />

        <ul className="nav-menu">
            <Link to="/">
                <BiHome />
                <li className="nav-home">Início</li>
            </Link>

            <Link to="/games">
                <SiNintendoswitch />
                <li className="nav-games">Jogos</li>
            </Link>

            <Link to="/contact">
                <RiContactsFill />
                <li className="nav-contact">Contato</li>
            </Link>

            <Link to="/login">
                <MdLogin />
                <li className="nav-login">Login</li>
            </Link>

        </ul>
        <Link to="/cart" className="cart">
            <FaShoppingCart />
        </Link>
    </nav>
}

export default Navigator;