import React from 'react';
import { useOutletContext } from "react-router-dom";
export default function ProductPricing(){
    const { currentProduct } = useOutletContext();
    return (
        <>
            <div style={{
                height:"500px",
                width : "auto",
                backgroundColor : "grey",
                textAlign : "center"
                }}>
                <h1> ProductPricing page || Pricing informations goes here  </h1>
                <h3> { currentProduct.productName } </h3>
            </div>
        </>
    )
};