import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  console.log(auth);
  return auth ? children : <Navigate to="/login" /> ;
};


export default RequireAuth;
