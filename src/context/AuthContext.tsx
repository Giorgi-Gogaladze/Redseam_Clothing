'use client'
import { IUser } from "@/components/utils/interfaces/Iuser";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
}

const AuthContext = createContext<undefined | IContext>(undefined);

export function AuthProvider({children}: {children: ReactNode}){
    const [user, setUser] = useState<IUser | null>(null);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if(storedUser){
        setUser(JSON.parse(storedUser))
      }  
      setIsLoading(false)
    }, []);

    useEffect(() => {
        if(user){
            localStorage.setItem('user', JSON.stringify(user))
        }else {
            localStorage.removeItem('user')
        }
    }, [user])
    


    return (
        <AuthContext.Provider value={{user, setUser, isCartOpen, setIsCartOpen, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('auth must be inside of provider')
    }
    return context
}