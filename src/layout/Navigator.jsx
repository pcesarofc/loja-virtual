import { React } from '../config/configComponents';
import { Link } from 'react-router-dom';

const Navigator = () => {
    return <nav className="navigator-page">
        <ul className="nav-menu">
            <Link to="/"><li className="nav-home">Home</li></Link>
            <Link to="/games"><li className="nav-games">Jogos</li></Link>
            <Link to="/contact"><li className="nav-contact">Contato</li></Link>
        </ul>

        <Link to="/chart" className="chart"><p >Carrinho</p></Link>
    </nav>
}

export default Navigator;