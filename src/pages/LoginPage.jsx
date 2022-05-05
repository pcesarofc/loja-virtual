import { React } from '../config/configComponents';
import { Login } from '../config/functions';
import { BsGoogle } from '../config/configIcons';

const LoginPage = () => {

    return <main className="login-page">
        <article>
            <section className="section-login">
                <form className="login-form">
                    <p className="title-form">Login</p>

                    <div className="input-text">
                        <input type="email" className="email" placeholder='Email' autoComplete='off' />
                        <input type="password" className="password" placeholder='Senha' autoComplete='off' />
                    </div>

                    <div className='check-menu'>
                        <input type="checkbox" className="remember" />
                        <label >Lembrar senha</label>
                    </div>

                    <input type="button" value="Entrar" className='login-button' />

                    <div className="separate">
                        <div></div>
                        <p>ou</p>
                        <div></div>
                    </div>

                    <BsGoogle className='google-icon' onClick={Login} />
                </form>
            </section>
        </article>
    </main>
}

export default LoginPage;