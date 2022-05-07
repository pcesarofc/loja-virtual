import { React } from '../config/configComponents';
import { MdDelete } from '../config/configIcons';
import axios from 'axios';
import { firebase } from '../service/Firebase';

const GameOnCart = ({ productsCart, setProductsCart, setValue }) => {
    const url = 'https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/'
    const user = firebase.auth().currentUser;
    var i;
    var price = 0;

    const DeleteGame = () => {
        axios.get(url + user.uid + '/chart.json').then(response => {

            for (i in response.data) {
                if (response.data[i].game == productsCart.game) {
                    axios.delete(url + user.uid + '/chart/' + i + '.json')
                }
            }

            var array = []
            for (i in response.data) {
                array = [...array, response.data[i]]
            }

            var newArray = array.filter((item) => item.game !== productsCart.game);

            for (i in newArray) {
                price = price + newArray[i].price
            }
            setValue('R$' + price.toFixed(2).toString().replace('.', ','))
            setProductsCart(newArray);

        })
    }

    return <div className="product-cart">
        <img src={productsCart.img} alt="product-cart" />
        <div className="infos-game-cart">
            <h3 className="title-game-cart">{productsCart.game}</h3>
            <h3 className="price-game-cart">{productsCart.price}</h3>
            <MdDelete onClick={DeleteGame} />
        </div>
    </div>
}

export default GameOnCart;