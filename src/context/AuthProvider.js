import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)


const userSign = (email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
}

const LogOut = () =>{
   return signOut(auth)
}

 const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
 }

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
   })
   return ()=> unsubscribe()
 },[])

const authInfo = { createUser , userSign , user , LogOut}

    
    return (
       <AuthContext.Provider value={authInfo} >
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;