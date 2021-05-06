import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import TeamDetailsScreen from "./screens/TeamDetailsScreen";
import PlayersScreen from "./screens/PlayersScreen";
import AddTeamMemberScreen from "./screens/AddTeamMemberScreen";
import AddTeamScreen from "./screens/AddTeamScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/team/:id" component={TeamDetailsScreen} />
          <Route path="/players" component={PlayersScreen} />
          <Route path="/addTeamMember" component={AddTeamMemberScreen} />
          <Route path="/addTeam" component={AddTeamScreen} />
        </Container>
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </Router>
  );
};

export default App;
