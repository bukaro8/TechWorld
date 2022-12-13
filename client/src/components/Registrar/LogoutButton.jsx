import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <div>
            <button className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 text-center border-r-8  " onClick={() => logout({returnTo:window.location.origin})}>Log Out</button>
        </div>
    )
}

export default LogoutButton
