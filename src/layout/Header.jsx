import { React, ProfilePhoto, FormSearch } from '../config/configComponents';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {

    return <header className="header-page">
        <Link to="/">
            <img src={Logo} alt="logo" className='logo' />
        </Link>
        <FormSearch />
        <ProfilePhoto />
    </header>
}

export default Header;