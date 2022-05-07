import { React, Home, LoginPage, Contact, Games, Cart, RegisterPage, UserPage } from './configComponents';
import { Routes, Route } from 'react-router-dom';
import ProtectedLoginRouter from './ProtectedLoginRouter';
import ProtectedRegisterRouter from './ProtectedRegisterRouter';
import ProtectedUserRouter from './ProtectedUserRouter';

const Router = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route element={<ProtectedLoginRouter/>}>
        <Route path="/login" element={<LoginPage/>} />
    </Route>
    <Route element={<ProtectedRegisterRouter/>}>
        <Route path="/register" element={<RegisterPage/>} />
    </Route>
    <Route path="/contact" element={<Contact />} />
    <Route path="/games" element={<Games />} />
    <Route path="/cart" element={<Cart />} />
    <Route element={<ProtectedUserRouter/>}>
        <Route path="/user" element={<UserPage/>} />
    </Route>
</Routes>

export default Router;