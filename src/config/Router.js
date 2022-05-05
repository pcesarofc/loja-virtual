import {React, Home} from './configComponents';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Games from '../pages/Games';
import Chart from '../pages/Chart';

const Router = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/games" element={<Games />} />
    <Route path="/chart" element={<Chart />} />
</Routes>

export default Router;