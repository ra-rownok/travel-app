import React from "react";
import Credentials from "../components/Credentials";
import Navbar from "../components/Navbar";

const SignIn = () => {
  return (
    <div>
      <Navbar type="login"></Navbar>
      <Credentials type="signIn"></Credentials>
    </div>
  );
};

export default SignIn;
