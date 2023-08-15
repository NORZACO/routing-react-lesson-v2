import React, { useState, useEffect } from "react";
import "../static/css/album.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// src/server.js
import { createServer } from "miragejs";
import { USERS, PRODUCTS } from "../datamocks/userGenerater";  // Adjust the path accordingly


const URL = "http://127.0.0.1:8000/api/v1/utility/allusers";

// Catching rendering errors with an error boundary
function CatchingError() {
  return <h1> CatchingError </h1>;
}

// ErrorBoundary is a React component that catches JavaScript errors anywhere in its child component tree,
// logs those errors, and displays a fallback UI.
class ErrorBoundary extends React.Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    // Initial state with hasError set to false
    this.state = { hasError: false };
  }

  // This lifecycle method is invoked after an error has been thrown by a descendant component.
  // It receives the error and updates the state so the next render will show the fallback UI.
  static getDerivedStateFromError(error) {
    // Update state to render the fallback UI
    return { hasError: true };
  }

  // This lifecycle method provides more info about the error that was caught.
  // Here we simply log the error and any additional details to the console.
  componentDidCatch(error, errorInfo) {
    // Log the error and additional information
    console.log(error, errorInfo);
  }

  // The render method is responsible for rendering the component
  render() {
    // If there's an error, render the CatchingError component
    if (this.state.hasError) {
      return <CatchingError />;
    }
    // Otherwise, render the children components
    return this.props.children;
  }
}

function GithubUser({ status, username, dataResults }) {
  return (
    <div className="LoaderBoots">
      {/*
      <h1> status : {status} </h1>
      <h1>username: {username} </h1>
      <h1>allDta: { JSON.stringify(dataResults, null, 2) } </h1> 
      <h1>Length : {typeof dataResults?.data.result.length} </h1>
      */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 albumShadow">
            {/* Here you can map through an array of cards and render them dynamically */}
            {dataResults?.data.result.map((person) => (
              // The key prop here will be used for React's diffing algorithm which helps us improve performance
              <div className="col" key={person.userId}>
                <div className="card shadow-sm">
                  <img src={person.avatar} alt={person.firstName} />
                  <div className="card-body " style={{ height: "auto" }}>
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
                        <a
                          href="#6"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </a>
                        <a
                          href="#6"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </a>
                      </div>
                      <small className="text-muted">
                        {" "}
                        followers: {person.followersCount}{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingCompenent() {
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
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

// let RawFetchingData
function FetchingData() {
  const [getdata, setData] = useState([]); // get data
  const [error, setError] = useState(null); // error
  const [isLoading, setLoadeding] = useState(false); // loading

  useEffect(() => {
    setLoadeding(true); // Fixed the typo here as well
    fetch(URL)
      .then((response) => response.json())
      .then(setData) // set data
      .then(() => setLoadeding(false)) // Usually, you would set loading to false after receiving data
      .then(() => console.log("data fetched"))
      .catch(setError);
  }, []);

  // check if it is loading
  if (isLoading) {
    return <LoadingCompenent />;
  }

  // check if they is error
  if (error) {
    return <div>Error: {JSON.stringify(error.message)}</div>;
  }

  console.log(getdata.status);
  console.log(getdata?.data?.result);
  // console.log(RawFetchingData.length);

  return getdata.status === "success" ? (
    <GithubUser
      status={getdata?.status ? getdata.status : null}
      username={
        getdata.data?.result?.[0] ? getdata.data.result[0].username : null
      }
      dataResults={getdata}
    />
  ) : (
    <LoadingCompenent />
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

console.log(USERS);
console.log(PRODUCTS);


const rundata =  () => {
  createServer({
    routes() {
      this.get("/api/reminders", () => ({
        reminders: USERS,
      }))
    },
  })
}

console.log(rundata);



function run2() {
  createServer({
    routes() {
      this.get("/api/reminders", () => ({
        reminders: USERS,
      }));

      this.post("/api/reminders", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log('attrs')
        console.log(attrs)
        debugger;
      });
    },
  });
}
run2()


export default FetchData;
