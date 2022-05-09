import React from "react";
import Mario from '../assets/mario.png';
import Pokemon from '../assets/pokemon.png';
import Zelda from '../assets/zelda.png';

const FamousGames = () => {
    return <section className="famous-games">
        <img src={Mario} alt="mario-game" />
        <img src={Pokemon} alt="mario-game" />
        <img src={Zelda} alt="mario-game" />
    </section>
}

export default FamousGames;