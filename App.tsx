import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './front-end/src/pages/Login';
import Register from './front-end/src/pages/Register';
import Dashboard from './front-end/src/pages/Dashboard';
import Products from './front-end/src/pages/Products';
import Users from './front-end/src/pages/Users';
import PrivateRoute from './front-end/src/components/PrivateRoute';

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>} />
      <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}