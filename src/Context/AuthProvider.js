import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    };

    const loginWithGithub = () =>{
        return signInWithPopup(auth, githubProvider)
    };

    const userLogOut = () =>{
        return signOut(auth)
    };

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

    const authInfo = {user, createUser, updateUserProfile, verifyUserEmail, loginUser, userPasswordReset, userLogOut, loginWithGoogle, loginWithGithub}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;