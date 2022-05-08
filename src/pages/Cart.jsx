import { React } from '../config/configComponents';
import { useEffect, useState } from 'react';
import GameOnCart from '../components/GameOnCart';
import { LoadCartGames } from '../config/functions';

const Cart = () => {
    const [productsCart, setProductsCart] = useState([])
    const [value, setValue] = useState('');

    useEffect(() => { LoadCartGames({ setProductsCart, setValue }) }, [])

    return <main className="cart-page">
        <article>
            <section className="cart-section">
                <div className="products-cart">
                    <h4>Produtos</h4>
                    {productsCart.map((productsCart) => (<GameOnCart productsCart={productsCart} setProductsCart={setProductsCart} setValue={setValue} />))}
                </div>
                <div className="buy">
                    <div className="discount">
                        <label >Cupom de desconto</label>
                        <input type="text" name="cupom" placeholder='Cupom' className='cupom' />
                        <input type="button" value="Adicionar" className='button-cupom' />
                    </div>
                    <h4>Valor total: <b>{value}</b></h4>
                    <input type="button" value="Comprar" className='button-buy' />
                </div>
            </section>
        </article>
    </main>
}

export default Cart;