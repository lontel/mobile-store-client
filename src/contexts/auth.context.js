import { createContext, useEffect, useState } from 'react'
import authService from '../services/auth.services'


const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")

        authService
            .verify(token)
            .then(({ data }) => {
                setUser(data)
                setIsLoading(false)
            })
            .catch(err => logoutUser())
    }

    const logoutUser = () => {
        setUser(null)
        setIsLoading(false)
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        authenticateUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <AuthContext.Provider value={{ isLoading, user, storeToken, authenticateUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }