
import { createContext } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const { login } = useState();

    const logout = () =>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}