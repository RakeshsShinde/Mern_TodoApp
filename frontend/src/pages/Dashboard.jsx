import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Todos from './Todos';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Dashboard;
