import { React } from '../config/configComponents';
import { addToCart } from '../config/functions';
import { Modal } from 'react-bootstrap';

const ModalGame = ({ games, setLgShow, lgShow }) => {

    const addCart = () => { addToCart({ games }) }

    return <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Detalhes
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={games.img} alt="game-photo" />
            <div className="infos-game">
                <h2>{games.game}</h2>
                <p>{games.description}</p>
                <div className="prices">
                    <h3><b>{games.newprice}</b> à vista</h3>
                    <h3>ou em <b>12x</b> sem juros</h3>
                </div>
                <input type="button" className='button-cart' value="Adicionar ao carrinho" onClick={addCart} />
            </div>
        </Modal.Body>
    </Modal>
}

export default ModalGame;