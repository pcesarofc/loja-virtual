import FormSearch from '../components/FormSearch';
import ProfilePhoto from '../components/ProfilePhoto';
import { React } from '../config/configComponents';

const Header = () => {
    return <header className="header-page">
        <h1 className="title-page">PC Games</h1>
        <FormSearch />
        <ProfilePhoto />
    </header>
}

export default Header;