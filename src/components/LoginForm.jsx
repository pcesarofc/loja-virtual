import { React } from '../config/configComponents';
import { BsGoogle } from '../config/configIcons';
import { Login } from '../config/functions';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    return <form className="login-form">
        <p className="title-form">Login</p>

        <div className="input-text">
            <input type="email" className="email" placeholder='Email' autoComplete='off' />
            <input type="password" className="password" placeholder='Senha' autoComplete='off' />
        </div>

        <div className='check-menu'>
            <input type="checkbox" className="remember" />
            <label >Lembrar senha</label>
        </div>

        <div className="buttons-form">
            <input type="button" value="Entrar" className='login-button' />
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