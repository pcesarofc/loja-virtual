import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [usuario, setUsuario] = useState();

    return <AuthContext.Provider value={{ usuario, setUsuario }}>
        {props.children}
    </AuthContext.Provider>
}

export { AuthContext };
export default AuthContextProvider;