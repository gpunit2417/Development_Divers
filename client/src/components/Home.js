import React from 'react'
import Sidebar from './Sidebar';
import Center from './Center';
import "./Home.css";

const Home = () => {
    return (
        <div className="home1">
            <div className='center'>
                <Sidebar />
                <Center />
            </div>
        </div>
    );
}

export default Home
