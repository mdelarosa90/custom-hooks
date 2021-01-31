import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h1>Login Screen</h1>
            <button className="btn btn-outline-dark" onClick={() => setUser({
                id: 123,
                name: 'Michael'
            })}>
                Login
            </button>
        </div>
    )
}
