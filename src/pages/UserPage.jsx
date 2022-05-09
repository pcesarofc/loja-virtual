import { React } from '../config/configComponents';
import { FaShoppingCart, MdLogin } from '../config/configIcons';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Logout } from '../config/functions';
import NoUser from '../assets/no-user.jpg'

const UserPage = () => {
    const { usuario, setUsuario } = useContext(AuthContext);
    const Deslogar = () => { Logout({ setUsuario }) }

    return <main className="user-page">
        <article>
            <section className="user-section">
                <div className="user-photo-email">
                    <img src={(usuario.photo != null) ? usuario.photo : NoUser} alt="user-card" />
                    <p>{usuario.email}</p>
                </div>
                <div className="actions">
                    <h3>Bem vindo <b>{usuario.name}</b>!</h3>
                    <div className="icons">
                        <Link to="/cart"><FaShoppingCart /></Link>
                        <MdLogin onClick={Deslogar} />
                    </div>
                </div>
            </section>
        </article>
    </main>
}

export default UserPage;