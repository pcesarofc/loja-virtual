import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [usuario, setUsuario] = useState([{
        photo: ""
    }]);

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            {props.children}
        </AuthContext.Provider>
    )
}