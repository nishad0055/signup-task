import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


const userSign = (email, password) =>{
   setLoading(false)
   return signInWithEmailAndPassword(auth, email, password)
}

const LogOut = () =>{
   setLoading(true)
   return signOut(auth)
}

const updateUser = (userInfo) =>{
 
   return updateProfile(auth.currentUser , userInfo)
}

 const createUser = (email, password) =>{
   setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
 }

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
   })
   return ()=> unsubscribe()
 },[])

const authInfo = { createUser , userSign , user , LogOut , updateUser , loading}

    
    return (
       <AuthContext.Provider value={authInfo} >
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;