import React from 'react';
import { Outlet } from "react-router-dom"
import Header from '../pages/Main/Header';
import Footer from '../pages/Main/Footer';




export default function LayOut() {

    return (
        <>
            <Header /> 
            <Outlet />
            <Footer />
        </>
    )
}