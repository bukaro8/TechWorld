import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";
import Profile from "./Profile";
import UnloginProfile from "./UnlogingProfile";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAdmin } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";


const IsAuthenticated = () => {
  const { isAuthenticated, user } = useAuth0();
  let userAdmin = useSelector((state) => state.admin);
  let dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserAdmin());
  }, [dispatch]);

  const emailAdmin = userAdmin.map((e) => e.email)
  const userEmailAdmin = user.email;

  // if(isAuthenticated && userEmailAdmin===emailAdmin){

  return (
    <div className="relative flex justify-around">
      {isAuthenticated && userEmailAdmin===emailAdmin? <Profile /> : <UnloginProfile/>}
      
      
      
    </div>
  );}
// };

export default IsAuthenticated;

