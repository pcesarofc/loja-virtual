import { React } from '../config/configComponents';
import { MdDelete } from '../config/configIcons';

const GameOnCart = ({ productsCart }) => {

    return <div className="product-cart">
        <img src={productsCart.img} alt="product-cart" />
        <div className="infos-game-cart">
            <h3 className="title-game-cart">{productsCart.game}</h3>
            <h3 className="price-game-cart">{productsCart.price}</h3>
            <MdDelete />
        </div>
    </div>
}

export default GameOnCart;