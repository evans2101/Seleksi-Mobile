import React, {useState, createContext, useEffect} from 'react';

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    const [subbag, setSubbag] = useState()

    useEffect(() => {
        if(user){
            if(user && user.seleksi) setSubbag('seleksi')
            if(user && user.diapers) setSubbag('diapers')
            if(user && user.pns) setSubbag('pns')
        }
    }, [user])

    return(
        <UserContext.Provider
            value={{
                user,
                setUser,
                subbag,
                setSubbag
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider