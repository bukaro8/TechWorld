import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Profile from "./Profile";
import UnloginProfile from "./UnlogingProfile";



const IsAuthenticated = () => {
  const { isAuthenticated, user } = useAuth0();
    //console.log(isAuthenticated, 'isAuth')
    //true or false
    //console.log(user,'isUser')
    
  return ( 
    <div className="relative flex justify-around">
      {isAuthenticated ? <Profile /> : <UnloginProfile />}

    </div>
  );
}

export default IsAuthenticated;

