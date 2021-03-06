import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddTeamModal from "./AddTeamModal";
import TeamsTable from "../views/TeamsTable";
const Teams = (props) => {
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
          <h1>Teams</h1>
        </Row>
        <Row>
          <Col sm={12}>
            <TeamsTable notify={props.notify}></TeamsTable>
          </Col>
        </Row>
        <Row className="justify-content-center mt-1">
          <AddTeamModal notify={props.notify} />
        </Row>
      </Container>
    </div>
  );
};

export default Teams;
