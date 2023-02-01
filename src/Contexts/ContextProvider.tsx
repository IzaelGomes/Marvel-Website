import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import {Theme} from '../styles/style'

type User = {
  email: string;
}

type AuthState = {
  isReady: boolean;
  user: User | null;
};

interface IContext{
  user:AuthState;
  theme: Theme;
  switchTheme: (themeTitle:string) => void;
} 

//defining my children type
type AuthProviderProps = PropsWithChildren<unknown>

//CREATING THE CONTEXT 
export const AuthContext = createContext<IContext | undefined>(undefined)

//this Authprovider component will provide user's information to all of the children components 
export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  //state with my user information
  const [user, setUser] = useState<AuthState>({
    isReady:false,
    user:null 
  })


  const savedTheme:any | null = localStorage.getItem("theme") 
  const [theme, setTheme] = useState(JSON.parse(savedTheme) || light )

  
  function switchTheme(themeTitle: string){
    if(themeTitle == "light"){
      setTheme(light)
      localStorage.setItem("theme", JSON.stringify(light))
    }else{
      setTheme(dark)
      localStorage.setItem("theme", JSON.stringify(dark))
    }
  }

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
    <AuthContext.Provider value={{user,switchTheme,theme}}>
        {children}
    </AuthContext.Provider>
  )
}



export const useAuth = () => {
  const {user} = useContext(AuthContext);

  if(!user) throw new Error('useAuth must be used inside AuthProvider')

  return user;
}

export default AuthContext