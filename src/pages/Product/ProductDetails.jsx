// import React from 'react';

// export default function HostVansDetails(){

//     return (
//         <>
//             <div style={{
//                 height:"500px",
//                 width : "auto",
//                 backgroundColor : "grey",
//                 textAlign : "center"
//                 }}>
//                 <h1> HostVansDetails page </h1>
//             </div>
//         </>
//     )
// };

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "../../static/css/details.css";
import NoPage from "../Main/NoPage";

const URL = "/api/v1/products";

export default function PersonDetails() {
  const { id } = useParams();

  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

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
      <>
        <br />
        <br />
        <div className="alert alert-danger container-md" role="alert">
          {error}
        </div>
      </>
    );
  }

  console.log(person);
  //
  if (person === "User not found") {
    return (
      //   <div className="spinner-border text-primary" role="status">
      //     <span className="visually-hidden">Loading...</span>
      //   </div>

      // Nopage
      <NoPage />
    );
  }

  return (
    <>
      <div
        className="container mt-1"
        style={{ margin: "auto", paddingTop: "50px" }}
      >
        {person && (
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={person.productImage}
                  className="img-fluid rounded-start"
                  alt={person.productName}
                    style={{ width: "100%", height: "auto", maxWidth: "450px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{person.productName}</h5>
                  <p className="card-text">{person.productDescription}</p>
                  {/* productDepartment */}
                  <hr></hr>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {person.productDepartment}
                  </button>
                  {/* productAdjective */}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {person.productAdjective}
                  </button>
                  {/* productMaterial */}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {person.productMaterial}
                  </button>
                  {/* productCategory */}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {person.productCategory}
                  </button>
                  <p className="card-text">
                    <br />
                    <small className="text-body-" style={{ color: "#dc3545" }}>
                      <h4> Price: ${person.productPrice} </h4>
                    </small>
                  </p>
                  {/* Add to cart */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                    <br />
                    {/* productCategory */}
                    <small className="text-muted">
                      {person.productCategory}
                    </small>
                    {/* productMaterial */}
                    <small className="text-muted">
                      {person.productMaterial}
                    </small>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          //   <div className="card mb-3" style={{ maxWidth: "800px" }}>
          //     <div className="row g-0">
          //       <div
          //         className="col-md-4"
          //         style={{
          //           fontFamily: "fantasy",
          //         }}
          //       >
          //         <img
          //           src={person.avatar}
          //           className="img-fluid rounded-start"
          //           alt={`${person.firstName}'s portrait`}
          //           style={{ width: "100%", height: "auto", maxWidth: "450px" }}
          //         />
          //       </div>
          //       <div className="col-md-8">
          //         <div className="card-body">
          //           <h2 className="card-title" style={{ textAlign: "center" }}>
          //             {person.firstName} {person.lastName}
          //           </h2>
          //           <h5 className="card-text font-weight-bold">
          //             Email: {person.email}
          //           </h5>
          //           <h5 className="card-text">
          //             Job Title: {person.userInfo.jobTitle}
          //           </h5>

          //           <h6 className="mt-4">About Me:</h6>
          //           <p className="card-text">{person.aboutMe}</p>

          //           <h6 className="mt-4">Biography:</h6>
          //           <p className="card-text">{person.userInfo.biograph}</p>

          //           <h6 className="mt-4">Education:</h6>
          //           <p className="card-text">{person.userInfo.school}</p>

          //           <h6 className="mt-4">Company:</h6>
          //           <p className="card-text">{person.userInfo.company}</p>

          //           <h6 className="mt-4">Languages:</h6>
          //           <p className="card-text">{person.userInfo.languages}</p>

          //           <h6 className="mt-4">Social Media:</h6>
          //           <ul>
          //             {Object.entries(person.userInfo.socialMedia).map(
          //               ([key, value]) => (
          //                 <li key={key}>
          //                   <a
          //                     href={value}
          //                     target="_blank"
          //                     rel="noopener noreferrer"
          //                   >
          //                     {key.charAt(0).toUpperCase() + key.slice(1)}
          //                   </a>
          //                 </li>
          //               )
          //             )}
          //           </ul>

          //           <p className="card-text">
          //             <small className="text-body-secondary">
          //               Member since: {person.registeredAt}
          //             </small>
          //           </p>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
        )}
      </div>
    </>
  );
}
