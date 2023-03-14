import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>

                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
