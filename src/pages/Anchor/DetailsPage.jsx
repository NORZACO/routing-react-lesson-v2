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
  console.log(id);

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
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  console.log(person);
  //
  if (person === "User not found") {
    return (
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
          <div className="card mb-3" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{
                  fontFamily: "fantasy",
                }}
              >
                <img
                  src={person.avatar}
                  className="img-fluid rounded-start"
                  alt={`${person.firstName}'s portrait`}
                  style={{ width: "100%", height: "auto", maxWidth: "450px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title" style={{ textAlign: "center" }}>
                    {person.firstName} {person.lastName}
                  </h2>
                  <h5 className="card-text font-weight-bold">
                    Email: {person.email}
                  </h5>
                  <h5 className="card-text">
                    Job Title: {person.userInfo.jobTitle}
                  </h5>

                  <h6 className="mt-4">About Me:</h6>
                  <p className="card-text">{person.aboutMe}</p>

                  <h6 className="mt-4">Biography:</h6>
                  <p className="card-text">{person.userInfo.biograph}</p>

                  <h6 className="mt-4">Education:</h6>
                  <p className="card-text">{person.userInfo.school}</p>

                  <h6 className="mt-4">Company:</h6>
                  <p className="card-text">{person.userInfo.company}</p>

                  <h6 className="mt-4">Languages:</h6>
                  <p className="card-text">{person.userInfo.languages}</p>

                  <h6 className="mt-4">Social Media:</h6>
                  <ul>
                    {Object.entries(person.userInfo.socialMedia).map(
                      ([key, value]) => (
                        <li key={key}>
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </a>
                        </li>
                      )
                    )}
                  </ul>

                  <p className="card-text">
                    <small className="text-body-secondary">
                      Member since: {person.registeredAt}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
