import axios from "axios";
import {
  TEAM_ADD_FAIL,
  TEAM_ADD_REQUEST,
  TEAM_ADD_SUCCESS,
  TEAM_DELETE_FAIL,
  TEAM_DELETE_REQUEST,
  TEAM_DELETE_SUCCESS,
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_LIST_FAIL,
  TEAM_LIST_REQUEST,
  TEAM_LIST_SUCCESS,
  TEAM_MEMBERS_ALL_FAIL,
  TEAM_MEMBERS_ALL_REQUEST,
  TEAM_MEMBERS_ALL_SUCCESS,
  TEAM_MEMBERS_FAIL,
  TEAM_MEMBERS_REQUEST,
  TEAM_MEMBERS_SUCCESS,
  TEAM_MEMBER_ADD_FAIL,
  TEAM_MEMBER_ADD_REQUEST,
  TEAM_MEMBER_ADD_SUCCESS,
  TEAM_MEMBER_DELETE_FAIL,
  TEAM_MEMBER_DELETE_REQUEST,
  TEAM_MEMBER_DELETE_SUCCESS,
} from "../constants/teamConstants";
import { toast } from "react-toastify";

export const listTeams = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_LIST_REQUEST });

    const { data } = await axios.get("/api/teams");

    dispatch({ type: TEAM_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEAM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTeamDetails = (id) => async (dispatch) => {
  try {
    console.log("in list team details");
    dispatch({ type: TEAM_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/teams/${id}`);

    dispatch({ type: TEAM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTeamMember = (teamName) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_MEMBERS_REQUEST });

    const { data } = await axios.get(`/api/teams/team/${teamName}`);

    dispatch({ type: TEAM_MEMBERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEAM_MEMBERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTeamMembersAll = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_MEMBERS_ALL_REQUEST });

    const { data } = await axios.get("/api/teamMembers");

    dispatch({ type: TEAM_MEMBERS_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEAM_MEMBERS_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTeamMember = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_MEMBER_DELETE_REQUEST });

    await axios.delete(`/api/teams/delete/${id}`);

    dispatch({ type: TEAM_MEMBER_DELETE_SUCCESS });
    toast.success("Team member deleted successfully!");
  } catch (error) {
    dispatch({
      type: TEAM_MEMBER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const addTeamMember = (team, fName, lName) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_MEMBER_ADD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(
      "/api/teams/add/teamMember",
      { team, fName, lName },
      config
    );

    dispatch({ type: TEAM_MEMBER_ADD_SUCCESS });
    toast.success("Team member added successfully!");
  } catch (error) {
    dispatch({
      type: TEAM_MEMBER_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const addTeam = (team, short, image) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_ADD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post("/api/teams/add/team", { team, short, image }, config);

    dispatch({ type: TEAM_ADD_SUCCESS });
    toast.success("Team added successfully!");
  } catch (error) {
    dispatch({
      type: TEAM_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const deleteTeam = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_DELETE_REQUEST });

    await axios.delete(`/api/teams/delete/team/${id}`);

    dispatch({ type: TEAM_DELETE_SUCCESS });
    toast.success("Team deleted successfully!");
  } catch (error) {
    dispatch({
      type: TEAM_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
