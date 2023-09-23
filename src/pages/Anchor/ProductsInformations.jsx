import React from "react";
import { useOutletContext } from "react-router-dom";
export default function ProductsInformations() {
  const { currentProduct } = useOutletContext();
  return (
    <>
      <div
        style={{
          height: "500px",
          width: "auto",
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        <h1> ProductsInformations page || Pricing informations goes here </h1>

        <h3> {currentProduct.productName} </h3>
        <h3> {currentProduct.product} </h3>
        <h3> {currentProduct.productCategory} </h3>
        <h3> {currentProduct.productPrice} </h3>
        <h3> {currentProduct.productImage} </h3>
        <button onClick={() => window.history.back()} className="btn btn-primary">Back</button>
        {/* <img src={require(`../../assets/images/${currentProduct.productImage}`)} alt="product" /> */}
      </div>
    </>
  );
}
