import { loadAxios, filterGames, marioFilter, pokemonFilter, zeldaFilter, monsterHunterFilter } from '../config/functions';
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

    const handleMarioFilter = () => { marioFilter({ setFiltro, mario, zelda, pokemon, monsterhunter }) }
    const handlePokemonFilter = () => { pokemonFilter({ setFiltro, mario, zelda, pokemon, monsterhunter }) }
    const handleZeldaFilter = () => { zeldaFilter({ setFiltro, mario, zelda, pokemon, monsterhunter }) }
    const handleMonsterFilter = () => { monsterHunterFilter({ setFiltro, mario, zelda, pokemon, monsterhunter }) }

    return <aside className="filtros">
        <h2 className="categories">Franquias</h2>
        <div className="mario">
            <input type="checkbox" name="mario" className="mario-checkbox" onChange={handleMarioFilter} />
            <label className='mario-label'>Mario</label>
        </div>
        <div className="pokemon">
            <input type="checkbox" name="pokemon" className="pokemon-checkbox" onClick={handlePokemonFilter} />
            <label className='pokemon-label'>Pokémon</label>
        </div>
        <div className="zelda">
            <input type="checkbox" name="zelda" className="zelda-checkbox" onClick={handleZeldaFilter} />
            <label className='zelda-label'>Zelda</label>
        </div>
        <div className="monster-hunter">
            <input type="checkbox" name="monster-hunter" className="monster-hunter-checkbox" onClick={handleMonsterFilter} />
            <label className='monster-hunter-label'>Monster Hunter</label>
        </div>
        <input type="button" value="Filtrar" className='button-filter-categories' onClick={Filtrar} />
    </aside>
}

export default Filtro;