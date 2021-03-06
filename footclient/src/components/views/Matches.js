import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AddMatchModal from "../views/AddMatchModal";
import MatchesTable from "./MatchesTable";

const Matches = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#25282A",
        borderRadius: "4px 4px 4px 4px",
        minHeight: "60vh",
        maxHeight: "80vh",
        padding: "16px",
        color: "#efefef",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <h1>Matches</h1>
        </Row>
        <Row>
          <Col sm={12}>
            <MatchesTable notify={props.notify}></MatchesTable>
          </Col>
        </Row>
        <Row className="justify-content-center mt-1">
          <AddMatchModal notify={props.notify} />
        </Row>
      </Container>
    </div>
  );
};

export default Matches;
