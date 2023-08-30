import React, { useState, useEffect } from "react";
import { MembersViews } from "./Persons";
import { LoadingCompenent } from "../Main/LoadingCompenent";

// let RawFetchingData
export function FetchingData() {
  const [getdata, setData] = useState([]); // get data
  const [error, setError] = useState(null); // error
  const [isLoading, setLoadeding] = useState(false); // loading

const URL = "/api/v1/users";

  useEffect(() => {
    setLoadeding(true); // Fixed the typo here as well
    fetch(URL)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoadeding(false)) // Usually, you would set loading to false after receiving data
      .then(() => console.log("data  not fetched", getdata))
      .catch(setError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // check if it is loading
  if (isLoading) {
    return <LoadingCompenent />;
  }

  // check if they is error
  if (error) {
    return (
      <>
      <br /><br />
        <div class="alert alert-danger">
          <strong>Danger!</strong> {JSON.stringify(error.message, null, 2)}
        </div>
      </>
    );
  }

  console.log(getdata.result);
  if (getdata) return <MembersViews dataResults={getdata.result} />;

  return <div> No data </div>;
}
