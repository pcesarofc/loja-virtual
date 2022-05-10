import { React, LoginPage } from './configComponents';
import { AuthContext } from './configComponents';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedLoginRouter = () => {

    const { usuario } = useContext(AuthContext);

    return (!usuario) ? <LoginPage /> : <Navigate to="/user" />
}

export default ProtectedLoginRouter;