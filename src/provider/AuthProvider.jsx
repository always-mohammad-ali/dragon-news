import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { set } from 'date-fns';



export const AuthContext = createContext();

export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    console.log(user)

    // CREATING A USER PROFILE
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
       
    }

    // LOGIN A USER
    
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    // LOG OUT A USER
    const logOutUser = () =>{
      return signOut(auth);
    }

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });

        return () =>{
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logInUser,
        logOutUser,
        loading, 
        setLoading
        
    }


    return <AuthContext value={authData}> {children} </AuthContext>;
    
};

export default AuthProvider;