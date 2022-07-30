import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='background'>
            <Navbar type="home"></Navbar>
            <Main></Main>
        </div>
    );
};

export default Home;