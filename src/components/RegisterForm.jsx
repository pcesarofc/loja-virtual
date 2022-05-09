import { useContext } from 'react';
import { React } from '../config/configComponents';
import { AuthContext } from '../contexts/AuthContext';
import { createAccount } from '../config/functions';

const RegisterForm = () => {
    const { setUsuario } = useContext(AuthContext);

    const createWithEmai = () => { createAccount({ setUsuario }) }

    return <form className="login-form">
        <p className="title-form">Cadastrar</p>

        <div className="input-text">
            <input type="email" className="email" placeholder='Email' autoComplete='off' />
            <input type="password" className="password" placeholder='Senha' autoComplete='off' />
        </div>

        <div className="buttons-form">
            <input type="button" value="Cadastrar" className='login-button' onClick={createWithEmai} />
        </div>
    </form>
}

export default RegisterForm;