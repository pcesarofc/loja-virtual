import CaroulselGames from '../components/CaroulselGames';
import FamousGames from '../components/FamousGames';
import { React } from '../config/configComponents';
import { Link } from 'react-router-dom';

const Home = () => {
    return <main className="home-page">
        <article>
            <CaroulselGames />
            <h2 className='title-section'>Principais franquias</h2>
            <FamousGames />
            <section className="contact">
                <h2>Entre em contato</h2>
                <Link to="/contact">
                    <input type="button" value="Contato" />
                </Link>
            </section>
        </article>
    </main>
}

export default Home;