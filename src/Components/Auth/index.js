import React, { useState, useEffect } from 'react'
import firebase from "firebase"

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            console.log(user)
            setCurrentUser(user)
            console.log(currentUser)
            setPending(false)
        })
    }, [])

    if(pending){
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}