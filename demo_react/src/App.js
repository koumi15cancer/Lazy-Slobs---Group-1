import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import ListReservationsComponents from './components/ListReservationsComponents';
import CreateReservationsComponents from './components/CreateReservationsComponents';
import ViewReservationsComponents from './components/ViewReservationsComponents';
<<<<<<< HEAD

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
   L              LazySlob
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )} 

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/reservations"} className="nav-link">
                   Reservations List
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path = "/reservations" component = {ListReservationsComponents}></Route>
              <Route path = "/add-reservation/:id" component = {CreateReservationsComponents}></Route>
              <Route path = "/view-reservation/:id" component = {ViewReservationsComponents}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
=======
import UpdateReseravationsComponents from './components/UpdateReseravationsComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Homepage from './components/Homepage';

function App(){
  return(
    <div>
      <HeaderComponent/>
      <Router>
                <div>
                    <Switch>
                          <Route path = "/" exact component = {Homepage}></Route>
                          <Route path = "/home" component = {Homepage}></Route>
                          <Route path = "/list-reservation" component = {ListReservationsComponents}></Route>
                          <Route path = "/reservations" component = {ListReservationsComponents}></Route>
                          <Route path = "/add-reservation" component = {CreateReservationsComponents}></Route>
                          <Route path = "/view-reservation" component = {ViewReservationsComponents}></Route>
                          <Route path = "/update-reservation/:id" component = {UpdateReseravationsComponents}></Route>
                    </Switch>
                 </div>
      </Router>
      <FooterComponent/>
    </div>
  );
>>>>>>> 2e43800668bbec9cf4b6629e6c1a55b2d52e8f9d
}

export default App;