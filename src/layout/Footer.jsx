import { React, FormSearch } from '../config/configComponents';
import { Link } from 'react-router-dom';

const Footer = () => {

    return <footer className="footer-page">
        <img src="" alt="logo-footer" className="logo-footer" />

        <nav className="info-footer">
            <ul className="nav-footer">
                <Link to='/'><li>Quem somos</li></Link>
                <Link to='/'><li>FAQ</li></Link>
                <Link to='/'><li>Mapa do site</li></Link>
                <Link to='/'><li>Contato</li></Link>
            </ul>
        </nav>

        <div className="subscribe">
            <h4 className="subscribe-title">Cadastre-se</h4>
            <p className="subscribe-text">E receba novidades!</p>
            <FormSearch />
        </div>

    </footer>
}

export default Footer;