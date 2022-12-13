import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import icon from "../../components/assets/imagenes/user2.png"
const UnloginProfile = () => {
    const { isAuthenticated } = useAuth0();
    
    return (
        !isAuthenticated && (
            <div>
              
              <img  className='w-10 h-10 rounded-full' src={icon} alt="profile"/>
                
            </div>

        )
    )
}

export default UnloginProfile