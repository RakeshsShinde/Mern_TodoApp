import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Todos from './Todos';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Todos />
        </div>
    );
}

export default Dashboard;
