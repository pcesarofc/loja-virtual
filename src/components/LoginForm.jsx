import { BsGoogle } from '../config/configIcons';
import { useContext } from 'react';
import { React } from '../config/configComponents';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Login, signInEmail } from '../config/functions';


const LoginForm = () => {

    const { setUsuario } = useContext(AuthContext);

    const loginWithEmail = () => { signInEmail({ setUsuario }) }


    return <form className="login-form">

        <p className="title-form">Login</p>

        <div className="input-text">
            <input type="email" className="email-login" placeholder='Email' autoComplete='off' />
            <input type="password" className="password-login" placeholder='Senha' autoComplete='off' />
        </div>

        <div className='check-menu'>
            <input type="checkbox" className="remember" />
            <label >Lembrar senha</label>
        </div>

        <div className="buttons-form">
            <input type="button" value="Entrar" className='login-button' onClick={loginWithEmail} />
            <Link to="/register"><input type="button" value="Cadastrar" className='register-button' /></Link>
        </div>

        <div className="separate">
            <div></div>
            <p>ou</p>
            <div></div>
        </div>

        <BsGoogle className='google-icon' onClick={Login} />

    </form>
}

export default LoginForm;