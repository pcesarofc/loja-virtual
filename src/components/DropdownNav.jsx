import { React } from '../config/configComponents';
import { AiOutlineMenu } from '../config/configIcons';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DropdownNav = () => {
    return <Dropdown className="dropdown-nav">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            <AiOutlineMenu />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item>
                <div>
                    <Link to="/">Início</Link>
                </div>
            </Dropdown.Item>

            <Dropdown.Item>
                <div>
                    <Link to="/games">Jogos</Link>
                </div>
            </Dropdown.Item>

            <Dropdown.Item>
                <div>
                    <Link to="/contact">Contato</Link>
                </div>
            </Dropdown.Item>

            <Dropdown.Item>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}

export default DropdownNav;