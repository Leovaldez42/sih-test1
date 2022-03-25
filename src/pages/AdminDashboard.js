import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function AdminDashboard()
{
    return(
        <>
            <p>Display details</p>
            <Navbar />
           
        </>
    )
}