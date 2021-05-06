import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTeamMember } from "../actions/teamActions";

const AddTeamMemberScreen = () => {
  const dispatch = useDispatch();
  const [team, setTeam] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTeamMember(team, firstName, lastName));
    setTeam("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="team">
          <Form.Label>Team</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Team Short Abbr"
            value={team}
            onChange={(e) => {
              setTeam(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="fName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="lName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Member
        </Button>
      </Form>
    </div>
  );
};

export default AddTeamMemberScreen;
