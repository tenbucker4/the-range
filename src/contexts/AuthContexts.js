import React, { useContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password) {
        return auth.creatUserWithEmailAndPassword(email, password);
    }

    auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
    });

    const value = {
        currentUser,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
