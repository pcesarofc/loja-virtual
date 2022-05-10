import { React, UserPage } from './configComponents';
import { AuthContext } from './configComponents';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedUserRouter = () => {

    const { usuario } = useContext(AuthContext);

    return (usuario) ? <UserPage /> : <Navigate to="/login" />
}

export default ProtectedUserRouter;