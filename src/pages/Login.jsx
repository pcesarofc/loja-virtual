import { React, AuthContext } from '../config/configComponents';
import { firebase, auth } from '../service/Firebase';
import { useContext } from 'react';

const Login = () => {
    const { usuario, setUsuario } = useContext(AuthContext);

    return <main className="login-page">LOGIN</main>
}

export default Login;