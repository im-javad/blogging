import React from "react";
import Navbar from "./components/general/Navbar";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Notifications from "./components/notification/Notofications";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Posts /> */}
        {/* <Users /> */}
        {/* <Notifications /> */}
      </Router>
    </>
  );
}

export default App;
