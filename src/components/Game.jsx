import { React, ModalGame } from '../config/configComponents';
import { FaShoppingCart } from '../config/configIcons';
import { addToCart } from '../config/functions';
import { useState } from 'react';

const Game = ({ games }) => {

    const [lgShow, setLgShow] = useState(false);

    const Add = () => { addToCart({ games }) }

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