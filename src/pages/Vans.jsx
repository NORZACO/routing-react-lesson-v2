import React from "react";
import "../static/css/album.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserApi from "../datamocks/server";
import { ErrorBoundary } from "./ErrorBoundary";
import { FetchingData } from "./FetchingData";
import { Link } from "react-router-dom";

UserApi();
export const URL = "/api/users";

export function GithubUser({ dataResults }) {
  return (
    <div className="LoaderBoots">
      {/* DEBUG */}
      {/* <h1> status : {status} </h1>
      <h1>username: {username} </h1> */}
      {/* <h1> allDta: { JSON.stringify(dataResults, null, 2) } </h1>  */}
      {/* <h1>Length : {typeof dataResults?.length} </h1> */}
      <div className="album py-5 bg-body-tertiary">
        <div className={"container"}>
          <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 albumShadow"}>
            {/* Here you can map through an array of cards and render them dynamically */}
            {dataResults?.map((person) => (
              // The key prop here will be used for React's diffing algorithm which helps us improve performance
              // LINK
              <Link to={`/persons/${person.userId}`} className="btn btn-sm btn-outline-secondary">
              <div className="col" key={person.userId}>
                <div className="card shadow-sm">
                  <img src={person.avatar} alt={person.firstName} />
                  <div className="card-body card-text-responsive">
                    <h3 className="card-text card-text-responsive">
                      {person.firstName}
                      {person.lastName}{" "}
                    </h3>
                    <ul className="card-list">
                      <li>{person.aboutMe}</li>
                      <li>{person.email}</li>
                      <li>{person.birthdate} </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        {/* <Link to={`/${person.userId}`}className="btn btn-sm btn-outline-secondary">View
                        
                        <Link></Link>
                          href="#6"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </Link> */}
                        {/* <Link to={`/${person.userId}`} className="btn btn-sm btn-outline-secondary"> View </Link> */}
                      </div>
                      <small className="text-muted">
                        {" "}
                        followers: {person.followersCount}{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoadingCompenent() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only"> </span>
        </div>
      </div>
    </>
  );
}

function FetchData() {
  return (
    <div>
      <ErrorBoundary>
        <FetchingData />
        <GithubUser />
      </ErrorBoundary>
    </div>
  );
}

export default FetchData;
