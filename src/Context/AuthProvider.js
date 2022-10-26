import React from 'react';
import { createContext } from 'react';
import {getAuth} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth()

const AuthProvider = ({children}) => {
    const user = {name: "Obayedullah Khan"}
    const authInfo = {user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;