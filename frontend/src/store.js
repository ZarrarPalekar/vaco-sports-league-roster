import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  teamDetailsReducer,
  teamListReducer,
  teamMemberReducer,
  teamMembersAllReducer,
  teamMemberDeleteReducer,
  teamMemberAddReducer,
  teamAddReducer,
  teamDeleteReducer,
} from "./reducers/teamReducers";

const reducer = combineReducers({
  teamList: teamListReducer,
  teamDetails: teamDetailsReducer,
  teamMember: teamMemberReducer,
  teamMembersAll: teamMembersAllReducer,
  teamMemberDelete: teamMemberDeleteReducer,
  teamMemberAdd: teamMemberAddReducer,
  teamAdd: teamAddReducer,
  teamDelete: teamDeleteReducer,
});
const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
