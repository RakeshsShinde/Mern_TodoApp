import React from 'react';
import Navbar from '../component/Navbar';
import Todos from './Todos';

const Dashboard = ({ search, setsearch }) => {
    console.log(search, setsearch);
    return (
        <div>
            <Navbar />
            <Todos />
        </div>
    );
}

export default Dashboard;
