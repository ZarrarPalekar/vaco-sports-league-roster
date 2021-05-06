import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  deleteTeamMember,
  listTeamDetails,
  listTeamMember,
} from "../actions/teamActions";
import Loader from "../components/Loader";

const TeamDetailsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  const [searchText, setSearchText] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const teamList = useSelector((state) => state.teamList);
  const { loading } = teamList;

  const teamDetails = useSelector((state) => state.teamDetails);
  const { loading: loadingDetails, team } = teamDetails;
  // alert(team);
  const teamMember = useSelector((state) => state.teamMember);
  const { loading: loadingMember, member: specificTeamMember } = teamMember;

  const teamMemberDelete = useSelector((state) => state.teamMemberDelete);
  const { success: successDelete } = teamMemberDelete;

  useEffect(() => {
    // alert("in useEffect");
    dispatch(listTeamDetails(id));
    const teamName = team.short;
    dispatch(listTeamMember(teamName));
    if (team) setTeamMembers(team);

    setTeamMembers(team);
  }, [dispatch, id, team.short, successDelete]);

  const deleteHandler = (id, name) => {
    if (
      window.confirm(`Are you sure you want to delete team member ${name}?`)
    ) {
      dispatch(deleteTeamMember(id));
    }
  };

  return (
    <>
      {loadingMember || loadingDetails || loading ? (
        <Loader />
      ) : (
        <div className="py-3">
          <LinkContainer to="/">
            <Button>Go Back</Button>
          </LinkContainer>
          <LinkContainer className="ml-3" to="/addTeamMember">
            <Button variant="info">Add Team Members</Button>
          </LinkContainer>
          <LinkContainer className="ml-3" to="/addTeam">
            <Button variant="success">Add Team</Button>
          </LinkContainer>
          <div className="d-flex justify-content-center align-items-center text-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={team.image} />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>{team.short}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <span>
            <i className="fas fa-search d-inline mr-1"></i>
          </span>{" "}
          <Form.Control
            type="text"
            id="txtSearch"
            className="mt-3 d-inline"
            style={{ width: "16.5%" }}
            placeholder="Search players"
            value={searchText}
            onChange={(e) => {
              setTeamMembers(
                specificTeamMember.filter(
                  (specific) =>
                    specific.firstName.match(new RegExp(e.target.value, "i")) ||
                    specific.lastName.match(new RegExp(e.target.value, "i"))
                )
              );
              setSearchText(e.target.value);
            }}
          ></Form.Control>
          {loadingMember || loadingDetails || loading ? (
            <Loader />
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
                </tr>
              </thead>
              <tbody>
                {teamMembers &&
                  (teamMembers.length > 0 || searchText.length > 0
                    ? teamMembers.map((teamMember, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{teamMember.firstName}</td>
                          <td>{teamMember.lastName}</td>
                          <td>
                            <Button
                              variant="danger"
                              className="btn-sm ml-2"
                              onClick={() =>
                                deleteHandler(
                                  teamMember._id,
                                  teamMember.firstName
                                )
                              }
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))
                    : specificTeamMember.map((teamMember, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{teamMember.firstName}</td>
                          <td>{teamMember.lastName}</td>
                          <td>
                            <Button
                              variant="danger"
                              className="btn-sm ml-2"
                              onClick={() =>
                                deleteHandler(
                                  teamMember._id,
                                  teamMember.firstName
                                )
                              }
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      )))}
              </tbody>
            </Table>
          )}
        </div>
      )}
    </>
  );
};

export default TeamDetailsScreen;
