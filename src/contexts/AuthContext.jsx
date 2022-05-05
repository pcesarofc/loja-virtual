import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [usuario, setUsuario] = useState();

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            {props.children}
        </AuthContext.Provider>
    )
}