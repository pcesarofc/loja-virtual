import { React, RegisterPage } from './configComponents';
import { AuthContext } from './configComponents';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRegisterRouter = () => {

    const { usuario } = useContext(AuthContext);

    return (!usuario) ? <RegisterPage /> : <Navigate to="/user" />
}

export default ProtectedRegisterRouter;