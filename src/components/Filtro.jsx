import { loadAxios, filterGames } from '../config/functions';
import { React } from '../config/configComponents';

const Filtro = ({ setGames, quantity, filtro, setFiltro, setShowMore }) => {

    const url = 'https://loja-virtualpc-default-rtdb.firebaseio.com/jogos.json';
    var mario = document.getElementsByName('mario');
    var zelda = document.getElementsByName('zelda');
    var pokemon = document.getElementsByName('pokemon');
    var monsterhunter = document.getElementsByName('monster-hunter');

    function Filtrar() {
        if (filtro != '') {
            filterGames({ setGames, filtro, url })
            setShowMore(false)
        } else {
            loadAxios({ setGames, quantity, url })
            setShowMore(true)
        }
    }

    function marioFilter() {
        if (mario[0].checked) {
            zelda[0].checked = false;
            pokemon[0].checked = false;
            monsterhunter[0].checked = false;
            setFiltro('Mario')
        } else setFiltro('')
    }

    function pokemonFilter() {

        if (pokemon[0].checked) {
            mario[0].checked = false;
            zelda[0].checked = false;
            monsterhunter[0].checked = false;
            setFiltro('Pokémon')
        } else setFiltro('')
    }

    function zeldaFilter() {

        if (zelda[0].checked) {
            pokemon[0].checked = false;
            mario[0].checked = false;
            monsterhunter[0].checked = false;
            setFiltro('Zelda')
        } else setFiltro('')
    }

    function monsterHunterFilter() {

        if (monsterhunter[0].checked) {
            zelda[0].checked = false;
            pokemon[0].checked = false;
            mario[0].checked = false;
            setFiltro('Monster Hunter')
        } else setFiltro('')
    }

    return <aside className="filtros">
        <h2 className="categories">Franquias</h2>
        <div className="mario">
            <input type="checkbox" name="mario" className="mario-checkbox" onChange={marioFilter} />
            <label className='mario-label'>Mario</label>
        </div>
        <div className="pokemon">
            <input type="checkbox" name="pokemon" className="pokemon-checkbox" onClick={pokemonFilter} />
            <label className='pokemon-label'>Pokémon</label>
        </div>
        <div className="zelda">
            <input type="checkbox" name="zelda" className="zelda-checkbox" onClick={zeldaFilter} />
            <label className='zelda-label'>Zelda</label>
        </div>
        <div className="monster-hunter">
            <input type="checkbox" name="monster-hunter" className="monster-hunter-checkbox" onClick={monsterHunterFilter} />
            <label className='monster-hunter-label'>Monster Hunter</label>
        </div>
        <input type="button" value="Filtrar" className='button-filter-categories' onClick={Filtrar} />
    </aside>
}

export default Filtro;