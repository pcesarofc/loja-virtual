import { useContext } from 'react';
import { React } from '../config/configComponents';
import { AuthContext } from '../contexts/AuthContext';

const ProfilePhoto = () => {
    const { usuario } = useContext(AuthContext);

    return (usuario)
        ? <img src={usuario.photo} alt="profile-photo" className="profile-photo" />
        : <img src="" alt="profile-photo" className="profile-photo" />
}

export default ProfilePhoto;