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

export const teamListReducer = (state = { teams: [] }, action) => {
  switch (action.type) {
    case TEAM_LIST_REQUEST:
      return { loading: true, teams: [] };
    case TEAM_LIST_SUCCESS:
      return { loading: false, teams: action.payload };
    case TEAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamDetailsReducer = (state = { team: [] }, action) => {
  switch (action.type) {
    case TEAM_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TEAM_DETAILS_SUCCESS:
      return { loading: false, team: action.payload };
    case TEAM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamMemberReducer = (state = { member: [] }, action) => {
  switch (action.type) {
    case TEAM_MEMBERS_REQUEST:
      return { loading: true, ...state };
    case TEAM_MEMBERS_SUCCESS:
      return { loading: false, member: action.payload };
    case TEAM_MEMBERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamMembersAllReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case TEAM_MEMBERS_ALL_REQUEST:
      return { loading: true, ...state };
    case TEAM_MEMBERS_ALL_SUCCESS:
      return { loading: false, members: action.payload };
    case TEAM_MEMBERS_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamMemberDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_MEMBER_DELETE_REQUEST:
      return { loading: true };
    case TEAM_MEMBER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TEAM_MEMBER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamMemberAddReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_MEMBER_ADD_REQUEST:
      return { loading: true };
    case TEAM_MEMBER_ADD_SUCCESS:
      return { loading: false, success: true };
    case TEAM_MEMBER_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamAddReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_ADD_REQUEST:
      return { loading: true };
    case TEAM_ADD_SUCCESS:
      return { loading: false, success: true };
    case TEAM_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teamDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_DELETE_REQUEST:
      return { loading: true };
    case TEAM_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TEAM_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
