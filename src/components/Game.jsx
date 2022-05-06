import { React, ModalGame } from '../config/configComponents';
import { FaShoppingCart } from '../config/configIcons';
import { firebase } from '../service/Firebase';
import axios from 'axios';
import { useState } from 'react';

const Game = ({ games }) => {

    const [lgShow, setLgShow] = useState(false);

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
        <img src={games.img} alt="game-photo" />
        <h3 className="title">{games.game}</h3>
        <p className="new-price">{games.newprice}</p>
        <p className="old-price">{games.oldprice}</p>

        <div className="buttons-game">
            <input type="button" value="Detalhes" onClick={() => setLgShow(true)} />
            <FaShoppingCart onClick={Add} />
        </div>
        <ModalGame setLgShow={setLgShow} games={games} lgShow={lgShow} />

    </div>
}

export default Game;