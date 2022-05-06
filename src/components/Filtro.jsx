import { React } from '../config/configComponents';

const Filtro = () => {

    return <aside className="filtros">
        <h2 className="categories">Franquias</h2>
        <div className="mario">
            <input type="checkbox" name="mario" className="mario-checkbox" />
            <label className='mario-label'>Mario</label>
        </div>
        <div className="pokemon">
            <input type="checkbox" name="pokemon" className="pokemon-checkbox" />
            <label className='pokemon-label'>Pokémon</label>
        </div>
        <div className="zelda">
            <input type="checkbox" name="zelda" className="zelda-checkbox" />
            <label className='zelda-label'>Zelda</label>
        </div>
        <div className="monster-hunter">
            <input type="checkbox" name="monster-hunter" className="monster-hunter-checkbox" />
            <label className='monster-hunter-label'>Monster Hunter</label>
        </div>
        <input type="button" value="Filtrar" className='button-filter-categories' />
    </aside>
}

export default Filtro;