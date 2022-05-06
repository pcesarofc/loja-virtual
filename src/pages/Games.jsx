import { React, MenuGames } from '../config/configComponents';

const Game = () => {
    return <main className="game-page">
        <article className="game-article">

            <aside className="filtros">Filtro</aside>

            <MenuGames />

            <section className="section-games">GAMES</section>
        </article>
    </main>
}

export default Game;