import React from "react";
import spinner from "./spinner.gif";
export default function Spinner() {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: 200, margin: "auto", display: "block" }}
      />
    </React.Fragment>
  );
}
