import React from "react";
import { Link } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTeam } from "../actions/teamActions";

const Team = ({ team }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id, name) => {
    if (window.confirm(`Are you sure you want to delete team ${name}?`)) {
      dispatch(deleteTeam(id));
    }
  };

  return (
    <Card className="my-3 p-3 rounded" style={{ width: "17rem" }}>
      <Link to={`/team/${team._id}`}>
        <Card.Img variant="top" style={{ height: "17rem" }} src={team.image} />
      </Link>

      <Card.Body>
        <Card.Title>{team.short}</Card.Title>
        <Link to={`/team/${team._id}`}>
          <Button variant="primary">Show Players</Button>
        </Link>
        <Button
          variant="danger"
          className="btn ml-4"
          onClick={() => deleteHandler(team._id, team.name)}
        >
          <i className="fas fa-trash"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Team;
