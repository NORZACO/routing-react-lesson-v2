import React from "react";
import "../../static/css/album.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserApi from "../../datamocks/server";
import { ErrorBoundary } from "../Main/ErrorBoundary";
import { FetchingData } from "./FetchingData";
import { Link } from "react-router-dom";

UserApi();


export function MembersViews({ dataResults }) {
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
            {dataResults?.map((person) => (
              // The key prop here will be used for React's diffing algorithm which helps us improve performance
              // <Link to={`/persons/${person.userId}`} key={person.userId} className="btn btn-sm btn-outline-secondary">
              <div className="col" key={person.userId}>
                <div className="card shadow-sm">
                  <img
                    src={person.avatar}
                    alt={person.firstName}
                    className="image-container"
                  />
                  <div className="card-body card-text-responsive">
                    <h4 className="card-text">
                      {person.firstName} {person.lastName}{" "}
                    </h4>
                    {/* <ul className="card-text card-list card-list-manual-style">
                      <li>{person.aboutMe}</li>
                      <li className="card-list-email-manual-style">{person.email}</li>
                      <li>{person.birthdate} </li>
                    </ul> */}
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${person.followersCount}%` }}
                      >
                        {person.followersCount}%
                      </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={`/persons/${person.userId}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </Link>
                      </div>
                      <small className="text-muted">
                        {" "}
                        followers: {person.followersCount}{" "}
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
        <FetchingData />
        <MembersViews />
      </ErrorBoundary>
    </div>
  );
}

export default FetchData;
