import { useEffect, useState } from 'react';
import { React, MenuGames, Game, Filtro } from '../config/configComponents';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from '../config/configIcons';
import { loadAxios, expandGames, retractGames } from '../config/functions';

const Games = () => {

    const [games, setGames] = useState([]);
    const [quantity, setQuantity] = useState(8);
    const [filtro, setFiltro] = useState('');
    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState(false);

    const verMais = () => { expandGames({ quantity, setGames, setQuantity }) };
    const verMenos = () => { retractGames({ setQuantity, setGames, games }) };

    useEffect(() => { loadAxios({ quantity, setGames }) }, [])

    return (quantity < 30)
        ? <main className="game-page">
            <article className="game-article">
                <Filtro setGames={setGames} quantity={quantity} filtro={filtro} setFiltro={setFiltro} setShowMore={setShowMore} />
                <MenuGames setList={setList} />
                <section className="section-games">
                    <div className='test'>{games.map((games) => (<Game games={games} list={list} />))}</div>
                    <AiOutlinePlusCircle onClick={verMais} className="button-view"
                        style={{ display: (showMore) ? 'flex' : 'none' }} />
                </section>
            </article>
        </main>

        : <main className="game-page">
            <article className="game-article">
                <Filtro setGames={setGames} quantity={quantity} filtro={filtro} setFiltro={setFiltro} />
                <MenuGames setList={setList} />
                <section className="section-games">
                    <div className='test'>{games.map((games) => (<Game games={games} list={list} />))}</div>
                    <AiOutlineMinusCircle onClick={verMenos} className="button-view"
                        style={{ display: (showMore) ? 'flex' : 'none' }} />
                </section>
            </article>
        </main >
}

export default Games;