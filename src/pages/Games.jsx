import { useEffect, useState } from 'react';
import { React, MenuGames, Game } from '../config/configComponents';
import axios from 'axios';

const Games = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('https://loja-virtualpc-default-rtdb.firebaseio.com/jogos.json').then(response => {
            setGames(response.data);
        })
    }, [])

    return <main className="game-page">
        <article className="game-article">

            <aside className="filtros">Filtro</aside>

            <MenuGames />

            <section className="section-games">

                {games.map((games) => (<Game games={games} />))}

            </section>
        </article>
    </main>
}

export default Games;