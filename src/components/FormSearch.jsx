import { React } from '../config/configComponents'
import { BsSearch } from '../config/configIcons'

const FormSearch = () => {

    return <form action="" className="search-game">
        <div className="input-text">
            <input type="text" name="input-search" className="input-search" placeholder='Procure um jogo' />
            <BsSearch />
        </div>
    </form>
}

export default FormSearch;