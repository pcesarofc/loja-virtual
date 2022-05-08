import { React, ModalGame } from '../config/configComponents'
import { FaShoppingCart } from '../config/configIcons'
import { addToCart } from '../config/functions'
import { useState } from 'react'

const Game = ({ games, list }) => {

    const [lgShow, setLgShow] = useState(false);

    const Add = () => { addToCart({ games }) }

    return <div className="game"
        style={{
            flexDirection: (list) ? 'row' : 'column',
            alignItems: (list) ? 'start' : 'center',
            width: (list) ? 'auto' : '200px',
            height: (list) ? 'auto' : '400px'
        }} >
        <img src={games.img} alt="game-photo" className='game-photo'
            style={{
                marginLeft: (list) ? '20px' : '0px'
            }} />
        <div className="container-game-infos"
            style={{
                alignItems: (list) ? 'start' : 'center',
                marginLeft: (list) ? '20px' : '0px'
            }} >
            <h3 className="title"
                style={{
                    paddingLeft: (list) ? '0px' : '10px'
                }} >
                {games.game}
            </h3>
            <p className="description-game"
                style={{
                    display: (list) ? 'flex' : 'none'
                }} >
                Lorem Ipsum is simply dummy text
                of the printing and typesetting
                industry. Lorem Ipsum has been
                the industry's standard dummy
                text ever since the 1500s, when
                an unknown printer took a galley
                of type and scrambled it to make
                a type specimen book. It has
                survived not only five centuries,
                but also the leap into electronic
                typesetting, remaining essentially
                unchanged. It was popularised in
                the 1960s with the release of
                Letraset sheets containing Lorem
                Ipsum passages, and more recently
                with desktop publishing software like
                Aldus PageMaker including versions
                of Lorem Ipsum.
            </p>
            <p className="new-price">{games.newprice}</p>
            <p className="old-price">{games.oldprice}</p>

            <div className="buttons-game">
                <input type="button" value="Detalhes" onClick={() => setLgShow(true)}
                    style={{
                        display: (list) ? 'none' : 'flex'
                    }} />
                <FaShoppingCart onClick={Add} />
            </div>
        </div>
        <ModalGame setLgShow={setLgShow} games={games} lgShow={lgShow} />

    </div>
}

export default Game;