import {React, Home} from './configComponents';
import { Routes, Route } from 'react-router-dom';

const Router = () => <Routes>
    <Route path="/" element={<Home />} />
</Routes>

export default Router;