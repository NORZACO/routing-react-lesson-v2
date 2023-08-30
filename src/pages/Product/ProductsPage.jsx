import React, { useState, useEffect } from "react";
import { LoadingCompenent } from "../Main/LoadingCompenent";

const URL = "/api/v1/products";

function FetchingProductData() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoadeding] = useState(false); // loading


  useEffect(() => {
    setLoadeding(true); // Fixed the typo here as well
    fetch(URL)
      .then((response) => response.json())
      .then(setProducts)
      .then(() => console.log("data  not fetched", products))
      .then(() => setLoadeding(false)) // Usually, you would set loading to false after receiving data
      .catch(setError);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {JSON.stringify(error.message, null, 2)}
      </div>
    );
  }

    // check if it is loading
    if (isLoading) {
      return <LoadingCompenent />;
    }

  if (products && products.result) return <ProductsPage dataResults={products.result} />;
  
  return <div> No data </div>;
}

function ProductsPage({ dataResults }) {
  return (
    <>
      <h3 style={{ 
        textAlign: "center",
        fontFamily: "fantasy",
        paddingTop: "50px",
        paddingBottom: "50px",
        fontSize: "50px",
        color: "rgb(0, 0, 0)",
        textShadow: "2px 2px 5px rgb(0, 0, 0)",
         }}>List of products</h3>
      <div className="container">
        <div className="row">
          {dataResults.map((product) => (
            <div className="col-md-4" key={product.productId}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.productImage}
                      className="img-fluid rounded-start"
                      alt={product.productName}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.productName}</h5>
                      <p className="card-text">{product.productCategory}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          NOK {product.productPrice}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FetchingProductData;
