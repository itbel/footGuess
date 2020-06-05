import { Table, Form, Button } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../App";
import FetchTeams from "../functional/FetchTeams";
import RemoveTeam from "../functional/RemoveTeam";

const MatchesTable = () => {
  const { state: authState, dispatch } = useContext(AuthContext);
  const [headers] = useState(["Team Name"]);
  const [currentPage, setCurrentPage] = useState(0);
  const [arr, setArr] = useState([]);
  const [wasFetched, setWasFetched] = useState(false);

  useEffect(() => {
    console.log("Teams Table Mounted. Fetching Data");
    if (authState.selectedTourId !== undefined) {
      FetchTeams(authState, dispatch).then((response) => {
        if (response.length > 0) {
          let tempArr = [];
          response.map((value, entry) => {
            if (entry % 5 === 0) {
              tempArr.push(response.slice(entry, entry + 5));
            }
            return null;
          });

          setArr(tempArr);
          setWasFetched(true);
        }
      });
    }
  }, [authState.teams, dispatch, authState]);

  return (
    <Table bordered striped variant="light" size="sm">
      <thead>
        <tr>
          {headers.map((val, key) => {
            return <th key={key}>{val}</th>;
          })}
          <th colSpan={1}></th>
        </tr>
      </thead>
      <tbody>
        {arr[currentPage] !== undefined ? (
          arr[currentPage].map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.teamName}</td>
                <td className="d-table-cell w-25">
                  <Button
                    variant="dark"
                    onClick={() => {
                      RemoveTeam(val, authState, dispatch);
                    }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No teams found</td>
          </tr>
        )}
        {arr.length > 0 ? (
          <tr>
            <td colSpan={4}>
              <Form.Control
                style={{ width: "20%" }}
                value={currentPage}
                onChange={(e) => {
                  setCurrentPage(e.target.value);
                }}
                as="select"
              >
                {arr.length > 0 && arr[currentPage].length > 0 && wasFetched
                  ? arr.map((val, index) => {
                      return <option key={index}>{index}</option>;
                    })
                  : null}
              </Form.Control>
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan={4}></td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default MatchesTable;