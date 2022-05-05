import { React, Home, Login, Contact, Games, Cart } from './configComponents';
import { Routes, Route } from 'react-router-dom';

const Router = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/games" element={<Games />} />
    <Route path="/cart" element={<Cart />} />
</Routes>

export default Router;