import React from "react";
import { Row } from "react-bootstrap";
import GuessTable from "./GuessTable";

const Guess = () => {
  return (
    <div
      style={{
        backgroundColor: "#25282A",
        borderRadius: "4px 4px 4px 4px",
        minHeight: "50vh",
        maxHeight: "80vh",
        padding: "16px",
        color: "#efefef",
      }}
    >
      <Row className="justify-content-center">
        <h1>Guesses</h1>
      </Row>
      <Row className="justify-content-center">
        <GuessTable />
      </Row>
    </div>
  );
};

export default Guess;
