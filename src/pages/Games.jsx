import { useEffect, useState } from 'react';
import { React, MenuGames, Game } from '../config/configComponents';
import axios from 'axios';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from '../config/configIcons';

const Games = () => {

    const [games, setGames] = useState([]);
    const [quantity, setQuantity] = useState(8);

    useEffect(() => {
        axios.get('https://loja-virtualpc-default-rtdb.firebaseio.com/jogos.json').then(response => {
            response.data.length = quantity;
            var i;
            var newgames = []

            for (i in response.data) {
                if (response.data[i].newprice === "") {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        oldprice: " ",
                        img: response.data[i].img,
                        franquia: response.data[i].franquia
                    }]
                } else {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                        oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        img: response.data[i].img,
                        franquia: response.data[i].franquia
                    }]
                }
            }
            setGames(newgames)
        })
    }, [])

    function verMAis() {
        var quantityupdated = quantity + 8;
        axios.get('https://loja-virtualpc-default-rtdb.firebaseio.com/jogos.json').then(response => {
            response.data.length = quantityupdated;
            var i;
            var newgames = []

            for (i in response.data) {
                if (response.data[i].newprice === "") {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        oldprice: " ",
                        img: response.data[i].img,
                        franquia: response.data[i].franquia
                    }]
                } else {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                        oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        img: response.data[i].img,
                        franquia: response.data[i].franquia
                    }]
                }
            }
            setGames(newgames);
            setQuantity(quantityupdated);
        })
    }

    function esconder() {
        var quantityupdated = 8;
        var gamesupdated = [];
        gamesupdated = games;
        gamesupdated.length = quantityupdated;
        setGames(gamesupdated);
        setQuantity(quantityupdated);
    }

    return (quantity < 30)
        ? <main className="game-page">
            <article className="game-article">
                <aside className="filtros">Filtro</aside>
                <MenuGames />
                <section className="section-games">
                    {games.map((games) => (<Game games={games} />))}
                </section>
                <AiOutlinePlusCircle onClick={verMAis} className="button-view" />
            </article>
        </main>

        : <main className="game-page">
            <article className="game-article">
                <aside className="filtros">Filtro</aside>
                <MenuGames />
                <section className="section-games">
                    {games.map((games) => (<Game games={games} />))}
                </section>
                <AiOutlineMinusCircle onClick={esconder} className="button-view" />
            </article>
        </main>
}

export default Games;