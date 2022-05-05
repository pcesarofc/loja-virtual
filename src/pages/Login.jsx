import { useContext } from 'react';
import { React } from '../config/configComponents';
import { AuthContext } from '../contexts/AuthContext';
import { firebase, auth } from '../service/Firebase';

const Login = () => {
    const { usuario, setUsuario } = useContext(AuthContext);

    return <main className="login-page">LOGIN</main>
}

export default Login;