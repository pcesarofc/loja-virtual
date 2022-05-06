import { React } from '../config/configComponents';
import { addToCart } from '../config/functions';
import { Modal } from 'react-bootstrap';

const ModalGame = ({ games, setLgShow, lgShow }) => {

    const addCart = () => { addToCart({ games }) }

    return <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Detalhes
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={games.img} alt="game-photo" />
            <div className="infos-game">
                <h2>{games.game}</h2>
                <p>Lorem Ipsum is simply dummy text
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
                    of Lorem Ipsum.</p>
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