import { React } from '../config/configComponents';

const RegisterForm = () => {
    return <form className="login-form">
        <p className="title-form">Cadastrar</p>

        <div className="input-text">
            <input type="email" className="email" placeholder='Email' autoComplete='off' />
            <input type="password" className="password" placeholder='Senha' autoComplete='off' />
        </div>

        <div className="buttons-form">
            <input type="button" value="Cadastrar" className='login-button' />
        </div>
    </form>
}

export default RegisterForm;