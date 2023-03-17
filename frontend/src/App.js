import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './component/Layout';
import Dashboard from './pages/Dashboard';

import Home from './pages/Home';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Signup from './pages/Signup';
import SingleTask from './pages/SingleTask';
import Todos from './pages/Todos';
const App = () => {
    const isuser = useSelector(state => state.userLogin.userInfo);
    console.log(isuser);
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={isuser ? <Navigate to='/dashboard' /> : <Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/dashboard' element={isuser ? <Dashboard /> : <Navigate to='/' />}></Route>
                <Route path='/SingleTask/:id' element={<SingleTask />}></Route>


            </Routes>
        </div>
    );
}

export default App;
