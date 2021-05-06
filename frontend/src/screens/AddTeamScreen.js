import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTeam } from "../actions/teamActions";

const AddTeamScreen = () => {
  const dispatch = useDispatch();
  const [team, setTeam] = useState();
  const [short, setShort] = useState();
  const [image, setImage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTeam(team, short, image));
    setTeam("");
    setShort("");
    setImage("");
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Team Name"
            value={team}
            onChange={(e) => {
              setTeam(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="short">
          <Form.Label>Short Form</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter team's short abbr"
            value={short}
            onChange={(e) => {
              setShort(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Image URL from cloudinary"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
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

export default AddTeamScreen;
