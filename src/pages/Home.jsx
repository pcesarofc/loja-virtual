import CaroulselGames from '../components/CaroulselGames';
import FamousGames from '../components/FamousGames';
import { React } from '../config/configComponents';
import { Link } from 'react-router-dom';

const Home = () => {
    return <main className="home-page">
        <article>
            <CaroulselGames />
            <div className="famous-container">
                <h2 className='title-section'>PRINCIPAIS FRANQUIAS</h2>
                <FamousGames />
            </div>
            <section className="contact">
                <h2>ENTRE EM CONTATO CONOSCO</h2>
                <Link to="/contact">
                    <input type="button" value="Contato" />
                </Link>
            </section>
        </article>
    </main>
}

export default Home;