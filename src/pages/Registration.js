import React from 'react';
import Login from '../components/Login';
import Navbar from '../components/Navbar';

const Registration = () => {
    return (
        <div>
            <Navbar type="login"></Navbar>
            <Login></Login>
        </div>
    );
};

export default Registration;