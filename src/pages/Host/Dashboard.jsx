import React from 'react';
import { Outlet } from "react-router-dom"

export default function Dashboard() {


    return (
        <>
            <div style={{
                height: "500px",
                width: "auto",
                backgroundColor: "pink",
                textAlign : "center"
            }}>
                <h1> Dashboard page </h1>
                <Outlet />
            </div>
        </>
    )
};