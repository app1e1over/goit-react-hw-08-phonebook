import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Me from 'pages/Me';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/me" element={<Me />}></Route>
        </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};
