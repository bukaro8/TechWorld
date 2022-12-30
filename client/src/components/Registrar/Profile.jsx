import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            <div>
                <picture>
                    <img src={user.picture} alt={user.name} class="rounded-full  h-9" />
                </picture>
                {/* <h2>{user.name}</h2> */}
                {/* <p>{user.email}</p> */}
            </div>
        )
    );

};
export default Profile;