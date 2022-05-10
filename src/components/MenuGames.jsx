import { React } from '../config/configComponents';
import { BsFillGrid3X3GapFill, FaListUl } from '../config/configIcons';
import $ from 'jquery';


const MenuGames = ({ setList }) => {

    const listView = () => {
        $('.test').css("display", "flex")
        $('.test').css("flexDirection", "column")
        setList(true)
    }

    const listGrid = () => {
        $('.test').css("display", "grid")
        setList(false)
    }

    return <menu className='menu-games'>

        <div className="grid-list">
            <BsFillGrid3X3GapFill onClick={listGrid} />
            <FaListUl onClick={listView} />
        </div>

        <select className="dropbox">
            <option value="0"></option>
            <option value="1">Maior Preço</option>
            <option value="2">Menor Preço</option>
        </select>

    </menu>
}

export default MenuGames;