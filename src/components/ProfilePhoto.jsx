import { useContext } from 'react';
import { React, AuthContext } from '../config/configComponents';
import { BsPersonCircle } from '../config/configIcons';
import { Login, Logout } from '../config/functions';
import { Dropdown } from 'react-bootstrap';

const ProfilePhoto = () => {

    const { usuario, setUsuario } = useContext(AuthContext);
    const Deslogar = () => Logout({ setUsuario });

    return (usuario != null)
        ? <div className='user-control'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={usuario.photo} alt="profile-photo" className="profile-photo" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={Deslogar}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className="user-name">Olá {usuario.name}!</p>
        </div>

        : <div className="user-control">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <BsPersonCircle />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={Login}>Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className="user-name">Usuário deslogado</p>
        </div>
}

export default ProfilePhoto;