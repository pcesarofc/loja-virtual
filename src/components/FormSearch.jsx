import { React } from '../config/configComponents';

const FormSearch = () => {
    return <form action="" className="search-game">
        <input type="text" name="input-search" className="input-search" placeholder='Procure um jogo' />
        <input type="button" value="Buscar" className='button-search' />
    </form>
}

export default FormSearch;