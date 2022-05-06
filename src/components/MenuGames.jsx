import { React } from '../config/configComponents';
import { BsFillGrid3X3GapFill, FaListUl } from '../config/configIcons';

const MenuGames = () => {

    return <menu className='menu-games'>
        <div className="grid-list">
            <BsFillGrid3X3GapFill />
            <FaListUl />
        </div>

        <select className="dropbox">
            <option value="0"></option>
            <option value="1">Maior Preço</option>
            <option value="2">Menor Preço</option>
        </select>
    </menu>
}

export default MenuGames;