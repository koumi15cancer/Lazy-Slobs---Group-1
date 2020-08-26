import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Homepage from './components/Homepage';
import ListReservationsComponents from './components/ListReservationsComponents';
import CreateReservationsComponents from './components/CreateReservationsComponents';
import ViewReservationsComponents from './components/ViewReservationsComponents';
import FooterComponent from './components/FooterComponet';

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
        <div class="container-fullwidth">
        <ul class="navbar navbar-expand navbar-dark bg-dark" id="home-navbar">
       
            <Link to={"/"} className="navbar-symbol">
              LazySlob
            </Link>
            <div className="navbar-nav mr-auto">

              <li className="navbar-text">
                <Link to={"/home"} class="navbar-text">
                  Home
                </Link>
              </li>

              <li className="navbar-text">
              <a href="aboutus.html" class="navbar-text">About Us</a>
              </li>

              <li className="navbar-text">
              <a href="menu.html" class="navbar-text">Menu</a>
              </li>

              <li className="navbar-text">
              <a href="contact.html" class="navbar-text">Contact Us</a>
              </li>

        

              {showModeratorBoard && (
                <li className="navbar-text">
                  <Link to={"/mod"} class="navbar-text">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="navbar-text">
                  <Link to={"/admin"} class="navbar-text">
                    Admin Board
                  </Link>
                </li>
              )} 

              {showAdminBoard && (
                <li className="navbar-text">
                  <Link to={"/reservations"} class="navbar-text">
                   Reservations List
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="navbar-text">
                  <Link to={"/user"} class="navbar-text">
                    User
                  </Link>
                </li>
              )}
              
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="navbar-text">
                  <Link to={"/profile"} class="navbar-text">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="navbar-text">
                  <a href="/login" class="navbar-text" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="navbar-text">
                  <Link to={"/login"}class="navbar-text">
                    Login
                  </Link>
                </li>

                <li className="navbar-text">
                  <Link to={"/register"} class="navbar-text">
                    Sign Up
                  </Link>
                </li>
                
              </div>
            )}
      
          </ul>
          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Homepage} />
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
        <FooterComponent/>
      </Router>
    );
  }
}

export default App;