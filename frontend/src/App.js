import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UpdateTodo from './pages/UpdateTodo'



const App = () => {
    const isuser = useSelector(state => state.userLogin.userInfo);
    return (

        <div className='App'>

            <Routes>
                <Route path='/' element={isuser ? <Navigate to='/dashboard' /> : <Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/dashboard' element={isuser ? <Dashboard /> : <Navigate to='/' />}></Route>
                <Route path='/task/:id' element={<UpdateTodo />}></Route>
            </Routes>
        </div>

    );
}

export default App;
