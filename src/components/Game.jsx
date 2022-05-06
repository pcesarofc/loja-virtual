import { React } from '../config/configComponents';
import { FaShoppingCart } from '../config/configIcons';
import { firebase, auth } from '../service/Firebase';
import axios from 'axios';

const Game = ({ games }) => {

    function Add() {
        const user = firebase.auth().currentUser;

        if (user) {
            axios.post('https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/' + user.uid + "/chart.json",
                {
                    "game": games.game,
                    "price": games.price
                }
            )
        } else {
            window.alert('usuário deslogado')
        }
    }

    return <div className="game">
        <div className="img">IMAGE</div>
        <h3 className="title">{games.game}</h3>
        <p className="new-price">R$300,00</p>
        <p className="old-price">R$300,00</p>

        <div className="buttons-game">
            <input type="button" value="Detalhes" />
            <FaShoppingCart onClick={Add} />
        </div>
    </div>
}

export default Game;