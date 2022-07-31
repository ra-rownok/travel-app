import React from "react";
import Credentials from "../components/Credentials";
import Navbar from "../components/Navbar";

const Registration = () => {
  return (
    <div>
      <Navbar type="signup"></Navbar>
      <Credentials type="registration"></Credentials>
    </div>
  );
};

export default Registration;
