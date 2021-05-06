import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeamMember, listTeamMembersAll } from "../actions/teamActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const PlayersScreen = () => {
  const dispatch = useDispatch();
  const [teams, setTeams] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [specificTeamMember, setSpecificTeamMember] = useState([]);

  const teamMembersAll = useSelector((state) => state.teamMembersAll);
  const { loading, error, members } = teamMembersAll;

  useEffect(() => {
    dispatch(listTeamMembersAll());
    if (members) setTeams(members);
  }, [dispatch, members]);

  const deleteHandler = (id, name) => {
    if (
      window.confirm(`Are you sure you want to delete team member ${name}?`)
    ) {
      dispatch(deleteTeamMember(id));
    }
  };
  return (
    <>
      <h1 className="py-3">All Players List</h1>
      <span>
        <i className="fas fa-search d-inline mr-1"></i>
      </span>{" "}
      <Form.Control
        type="text"
        id="txtSearch"
        className="mt-3 d-inline"
        style={{ width: "16.3%" }}
        placeholder="Search players"
        value={searchText}
        onChange={(e) => {
          setSpecificTeamMember(
            teams.filter(
              (specific) =>
                specific.firstName.match(new RegExp(e.target.value, "i")) ||
                specific.lastName.match(new RegExp(e.target.value, "i")) ||
                specific.team.match(new RegExp(e.target.value, "i"))
            )
          );
          setSearchText(e.target.value);
        }}
      ></Form.Control>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Table
          striped
          bordered
          hover
          variant="primary"
          size="sm"
          className="mt-3"
        >
          <thead>
            <tr>
              <th>Sr No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {specificTeamMember.length > 0 || searchText.length > 0
              ? specificTeamMember.map((teamMember, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{teamMember.firstName}</td>
                    <td>{teamMember.lastName}</td>
                    <td>{teamMember.team}</td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn-sm ml-2"
                        onClick={() =>
                          deleteHandler(teamMember._id, teamMember.firstName)
                        }
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              : teams.map((teamMember, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{teamMember.firstName}</td>
                    <td>{teamMember.lastName}</td>
                    <td>{teamMember.team}</td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn-sm ml-2"
                        onClick={() =>
                          deleteHandler(teamMember._id, teamMember.firstName)
                        }
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PlayersScreen;
