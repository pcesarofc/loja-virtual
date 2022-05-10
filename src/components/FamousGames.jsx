import React from "react";
import Mario from '../assets/mario.jpg';
import Pokemon from '../assets/pokemon.jpg';
import Zelda from '../assets/zelda.jpg';

const FamousGames = () => {
    return <section className="famous-games">
        <img src={Mario} alt="mario-game" />
        <img src={Pokemon} alt="mario-game" />
        <img src={Zelda} alt="mario-game" />
    </section>
}

export default FamousGames;