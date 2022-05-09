import { React } from '../config/configComponents';

const Contact = () => {
    return <main className="contact-page">
        <article>
            <section className="section-contato">
                <div className="info-contacts">
                    <h3 className='title-contact'>Entre em contato conosco</h3>

                    <h4 className="email">E-mail</h4>
                    <p>pcgames1234@gmail.com</p>
                    <h4 className="telefone">Telefone ou WhatsApp</h4>
                    <p className='number'>(22) 99999-9999</p>
                </div>
                <form action="submit">
                    <input type="email" name="email" className="email-contact" placeholder='Email' autoComplete='off' />
                    <input type="text" name="name" className="name-contact" placeholder='Nome' autoComplete='off' />
                    <textarea name="message" className="message-contact" placeholder='Mensagem' autoComplete='off'></textarea>
                    <input type="button" value="Enviar" className='button-contact' />
                </form>

            </section>
        </article>
    </main>
}

export default Contact;