import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <div>
            <button className="text-lg font-semibold hover:text-red-600 px-8 " onClick={() => logout({returnTo:window.location.origin})}>Log Out</button>
        </div>
    )
}

export default LogoutButton
