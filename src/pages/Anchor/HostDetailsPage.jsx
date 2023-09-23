import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import swal from 'sweetalert2'
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'
import { Link, Outlet,   } from "react-router-dom";

import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "../../static/css/details.css";
import "../../static/css/cards.css";
import NoPage from "../Main/NoPage";

const URL = "/api/v1/products";

const cardStyles = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  maxWidth: "600px",
  margin: "auto",
  textAlign: "center",
  fontFamily: "arial",
};

const priceStyles = {
  color: "grey",
  fontSize: "22px",
};



export default function HostDetailsPage() {
  const { id } = useParams();
  // useOutletContext
  // const [currentProduct, setCurrentProduct] = React.useState(null);



  // const [product, setproduct] = useState(null);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [error, setError] = useState(null);
  const [addCartcolor, setAddCartcolor] = useState("green");




  

  const buttonStyles = {
    border: "none",
    outline: "0",
    padding: "12px",
    color: "white",
    backgroundColor: addCartcolor,
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    fontSize: "18px",
  };

  // activeStyles
  const activeStyles = {
    backgroundColor: "red",
  };




  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        return res.json();
      })
      .then((data) => setCurrentProduct(data.result))
      
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  console.log(currentProduct);
  //
  if (currentProduct === "User not found") {
    return <NoPage />;
  }

  return (
    <>
      <div className="container mt-1" style={{ margin: "auto", paddingTop: "50px" }} >
        {currentProduct && (
          <>
            <h2 style={{ textAlign: "center" }}> {currentProduct.productName}  </h2>

            {/* go back to all products */}
            <Link to="../../" relative="path" className="btn btn-primary">
              <i className="bi bi-arrow-left-circle"></i> Go Back
            </Link>

            <hr />
            
            <br />

            <div className="card" style={cardStyles}>
              <img
                src={currentProduct.productImage}
                alt={"Denim Jeans"}
                style={{ width: "100%" }}
              />
              <h1> {currentProduct.productName} </h1>
              <p style={priceStyles}>${currentProduct.productPrice}</p>
              <p>{currentProduct.productDescription}</p>
              <p>
                <button
                  onClick={() => {
                    Swal.fire(
                      "Good job!",
                      `"${currentProduct.productName}" has been added to the cart`,
                      "success"
                    );
                    return setAddCartcolor("blue");
                  }}
                  style={buttonStyles}
                >
                  {" "}
                  Add to Cart{" "}
                </button>
              </p>
            </div>
           <div className="topnav">
            <NavLink to="."style={({ isActive}) => isActive ? activeStyles : null}> Details </NavLink>
            <NavLink to="pricing"style={({ isActive}) => isActive ? activeStyles : null}> Pricing </NavLink>
            <NavLink to="photos"style={({ isActive}) => isActive ? activeStyles : null}> Photos </NavLink>
           </div>     
           <Outlet context={{ currentProduct }} />;
          </>
        )}
      </div>
    </>
  );
}
