
import React from 'react';
import { Outlet } from "react-router-dom"
import Header from '../pages/Header';



export default function LayOut() {

    return (
        <>
            <Header /> 
            <Outlet />
        </>
    )
}