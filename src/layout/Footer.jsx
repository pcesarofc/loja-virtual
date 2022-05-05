import { React } from '../config/configComponents';
import { Link } from 'react-router-dom';
import { FiSend } from '../config/configIcons';
import Logo from '../assets/logo2.png';

const Footer = () => {

    return <footer className="footer-page">
        <Link to="/">
            <img src={Logo} alt="logo-footer" className="logo-footer" />
        </Link>

        <nav className="info-footer">
            <ul className="nav-footer">
                <li><Link to='/'>Quem somos</Link></li>
                <li><Link to='/'>FAQ</Link></li>
                <li><Link to='/'>Mapa do site</Link></li>
                <li><Link to='/'>Contato</Link></li>
            </ul>
        </nav>

        <div className="subscribe">
            <h4 className="subscribe-title">Cadastre-se</h4>
            <p className="subscribe-text">E receba novidades!</p>
            <div className="input-text-footer">
                <input type="email" name="input-search-footer" className="input-search-footer" placeholder='Digite seu email' />
                <FiSend />
            </div>
        </div>

    </footer>
}

export default Footer;