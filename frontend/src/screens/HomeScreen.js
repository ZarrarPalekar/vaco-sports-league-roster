import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import teams from "../dummydata/teams";
import { Button, Col, Row } from "react-bootstrap";
import Team from "../components/Team";
import { listTeams } from "../actions/teamActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const teamList = useSelector((state) => state.teamList);
  const { loading, error, teams } = teamList;

  const teamDelete = useSelector((state) => state.teamDelete);
  const { success } = teamDelete;

  useEffect(() => {
    dispatch(listTeams());
  }, [dispatch, success]);

  return (
    <>
      <h1 className="mt-3">All Teams</h1>
      <LinkContainer to="/addTeamMember">
        <Button variant="info">Add Team Members</Button>
      </LinkContainer>
      <LinkContainer className="ml-3" to="/addTeam">
        <Button variant="success">Add Team</Button>
      </LinkContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {teams.map((team) => (
            <Col sm={12} md={6} lg={4} xl={3} key={team._id}>
              <Team team={team} key={team._id} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
