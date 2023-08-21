import React from "react";
import "../../static/css/album.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import UserApi from "../../datamocks/server";
import { ErrorBoundary } from "../Main/ErrorBoundary";
import { FetchingProductData } from "./FetchingProductData";
import { Link } from "react-router-dom";

// UserApi();

export function Products({ dataResults }) {
  return (
    <div className="LoaderBoots">
      {/* DEBUG */}
      {/* <h1> status : {status} </h1>
      <h1>username: {username} </h1> */}
      {/* <h1> allDta: { JSON.stringify(dataResults, null, 2) } </h1>  */}
      {/* <h1>Length : {typeof dataResults?.length} </h1> */}
      <div className="album py-5 bg-body-tertiary">
        <div className={"container"}>
          <div
            className={
              "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 albumShadow"
            }
          >
            {/* Here you can map through an array of cards and render them dynamically */}
            {dataResults?.map((product) => (
              // The key prop here will be used for React's diffing algorithm which helps us improve performance
              // <Link to={`/products/${product.userId}`} key={product.userId} className="btn btn-sm btn-outline-secondary">
              <div className="col" key={product.productId}>
                <div className="card shadow-sm">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="image-container"
                  />
                  <div className="card-body card-text-responsive">

                    {/* <ul className="card-text card-list card-list-manual-style">
                      <li>{product.productAdjective}</li>
                      <li className="card-list-email-manual-style">{product.productCategory}</li>
                      <li>{product.productMaterial} </li>
                    </ul> */}
    
                    <div className="">
                      <h4> {product.productName} </h4>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={`/products/${product.productId}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </Link>
                        
                        <Link
                          to={`/products/${product.productId}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </Link>

                      </div>
                      <small className="text-muted">
                        {" "}
                        Price: {product.productPrice}
                        {""}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              // </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FetchData() {
  return (
    <div>
      <ErrorBoundary>
        <FetchingProductData />
        <Products />
      </ErrorBoundary>
    </div>
  );
}

export default FetchData;
