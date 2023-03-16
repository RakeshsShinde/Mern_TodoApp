import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/Layout';
import Dashboard from './pages/Dashboard';

import Home from './pages/Home';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Signup from './pages/Signup';
import Todos from './pages/Todos';
const App = () => {
    const isuser = localStorage.getItem('userInfo');
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={isuser ? <Dashboard /> : <Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='' element={<Todos />}></Route>
                    <Route path='setting' element={<Setting />}></Route>

                </Route>

            </Routes>
        </div>
    );
}

export default App;
