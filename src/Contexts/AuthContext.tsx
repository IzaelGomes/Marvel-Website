import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

interface User {
  email: string;
}

type AuthState = {
  isReady: boolean;
  user: User | null;
};

//defining my children type
type AuthProviderProps = PropsWithChildren<unknown>

//CREATING THE CONTEXT 
export const AuthContext = createContext<User | AuthState | undefined >(undefined)

//this Authprovider component will provide user's information to all of the children components 
export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  //state with my user information
  const [user, setUser] = useState<AuthState>({
    isReady:false,
    user:null 
  })

  useEffect(() => {
    //firebase method to verify when my user change 
    auth.onAuthStateChanged((user) => {
      if (!user) return setUser({ isReady: true, user: null });

      if(user){
        setUser({
          isReady:true,
          user:{
            email: user.email ?? "",
          }
        })
      }
    })

  }, [])

  return (
    //Using the context to provide the user to my children components  
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const state = useContext(AuthContext);

  if(!state) throw new Error('useAuth must be used inside AuthProvider')

  return state;
}

export default AuthContext