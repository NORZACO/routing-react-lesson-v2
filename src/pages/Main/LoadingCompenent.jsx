import React from "react";

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
