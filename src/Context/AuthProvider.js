import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    };

    const verifyUserEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    };

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userLogOut = () =>{
        return signOut(auth)
    }

    const userPasswordReset = (email) =>{
       return sendPasswordResetEmail(auth, email)
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createUser, updateUserProfile, verifyUserEmail, loginUser, userPasswordReset, userLogOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;