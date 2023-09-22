import React, { useEffect, useState } from "react";
// import swal from 'sweetalert2'
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

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



// const buttonStyles = {
//   border: "none",
//   outline: "0",
//   padding: "12px",
//   color: "white",
//   backgroundColor: '' ,
//   textAlign: "center",
//   cursor: "pointer",
//   width: "100%",
//   fontSize: "18px",

// };





export default function HostDetailsPage() {
  const { id } = useParams();

  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);
  const [addCartcolor, setAddCartcolor] = useState('green');
  // const MySwal = withReactContent(Swal)

  const buttonStyles = {
    border: "none",
    outline: "0",
    padding: "12px",
    color: "white",
    backgroundColor: addCartcolor ,
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    fontSize: "18px",
  
  };


  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch person details");
        }
        return res.json();
      })
      .then((data) => setPerson(data.result))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  console.log(person);
  //
  if (person === "User not found") {
    return <NoPage />;
  }

  return (
    <>
      <div
        className="container mt-1"
        style={{ margin: "auto", paddingTop: "50px" }}
      >
        {person && (
          <>
            <h2 style={{textAlign: "center"}}>
            <h1> { person.productName } </h1>
              </h2>
              <hr/>
<br/>

            <div className="card" style={cardStyles}>
                <img src={ person.productImage } alt={"Denim Jeans"} style={{width: "100%"}} />
              <h1> { person.productName } </h1>
              <p style={priceStyles}>${person.productPrice }</p>
              <p>
                { person.productDescription }
              </p>
              <p>
                <button
                onClick={() => {
                  Swal.fire(
                    'Good job!',
                    `"${person.productName}" has been added to the cart`,
                    'success'
                  )

                  // MySwal.fire({
                  //   title: <p>Hello World</p>,
                  //   didOpen: () => {
                  //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                  //     MySwal.showLoading()
                  //   },
                  // }).then(() => {
                  //   return MySwal.fire(<p>Shorthand works too</p>)
                  // })

                  return setAddCartcolor("blue");
                }}
                style={buttonStyles}> Add to Cart </button>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
