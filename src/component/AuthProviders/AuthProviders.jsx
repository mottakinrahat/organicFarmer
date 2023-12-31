import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const resetPassword = (email) => {
       return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {

        return signOut(auth)
    }
    const updateUserData = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo



        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setLoading(false)
            setUser(loggedUser)

        })
        return () => {
            return unsubscribe;
        }
    }, [])



    const authInfo = {
        user, loading,
        setLoading,
        createUser,
        loginUser,
        loginWithGoogle,
        updateUserData,
        logOut,
        resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;