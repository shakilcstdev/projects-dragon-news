import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import App from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(App);


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

        console.log(user);

    const createUser =(Email, password) => {
        return createUserWithEmailAndPassword(auth, Email, password);
    };

    useEffect(()=>{
       const unubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unubscribe();
        }

    },[]);

    const authData = {
        user,
        setUser,
        createUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
     ;
};

export default AuthProvider;