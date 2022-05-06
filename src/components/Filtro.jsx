import { React } from '../config/configComponents';
import axios from 'axios';
import { useState } from 'react';

const Filtro = ({ setGames }) => {

    const [filtro, setFiltro] = useState('');

    function Filtrar() {
        if (filtro != '') {
            const url = 'https://loja-virtualpc-default-rtdb.firebaseio.com/jogos.json'

            axios.get(url + '?orderBy="franquia"&equalTo="' + filtro + '"').then(response => {
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
        }
    }

    function checked1() {
        var mario = document.getElementsByName('mario');
        var zelda = document.getElementsByName('zelda');
        var pokemon = document.getElementsByName('pokemon');
        var monsterhunter = document.getElementsByName('monster-hunter');

        if (mario[0].checked) {
            zelda[0].checked = false;
            pokemon[0].checked = false;
            monsterhunter[0].checked = false;
            setFiltro('Mario')
        }
    }
    function checked2() {
        var mario = document.getElementsByName('mario');
        var zelda = document.getElementsByName('zelda');
        var pokemon = document.getElementsByName('pokemon');
        var monsterhunter = document.getElementsByName('monster-hunter');

        if (pokemon[0].checked) {
            mario[0].checked = false;
            zelda[0].checked = false;
            monsterhunter[0].checked = false;
            setFiltro('Pokémon')
        }
    }
    function checked3() {
        var mario = document.getElementsByName('mario');
        var zelda = document.getElementsByName('zelda');
        var pokemon = document.getElementsByName('pokemon');
        var monsterhunter = document.getElementsByName('monster-hunter');

        if (zelda[0].checked) {
            pokemon[0].checked = false;
            mario[0].checked = false;
            monsterhunter[0].checked = false;
            setFiltro('Zelda')
        }
    }
    function checked4() {
        var mario = document.getElementsByName('mario');
        var zelda = document.getElementsByName('zelda');
        var pokemon = document.getElementsByName('pokemon');
        var monsterhunter = document.getElementsByName('monster-hunter');

        if (monsterhunter[0].checked) {
            zelda[0].checked = false;
            pokemon[0].checked = false;
            mario[0].checked = false;
            setFiltro('Monster Hunter')
        }
    }


    return <aside className="filtros">
        <h2 className="categories">Franquias</h2>
        <div className="mario">
            <input type="checkbox" name="mario" className="mario-checkbox" onClick={checked1} value='1' />
            <label className='mario-label'>Mario</label>
        </div>
        <div className="pokemon">
            <input type="checkbox" name="pokemon" className="pokemon-checkbox" onClick={checked2} value='2' />
            <label className='pokemon-label'>Pokémon</label>
        </div>
        <div className="zelda">
            <input type="checkbox" name="zelda" className="zelda-checkbox" onClick={checked3} value='3' />
            <label className='zelda-label'>Zelda</label>
        </div>
        <div className="monster-hunter">
            <input type="checkbox" name="monster-hunter" className="monster-hunter-checkbox" onClick={checked4} value='4' />
            <label className='monster-hunter-label'>Monster Hunter</label>
        </div>
        <input type="button" value="Filtrar" className='button-filter-categories' onClick={Filtrar} />
    </aside>
}

export default Filtro;