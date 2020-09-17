import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/Auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/BoardUser.component";
import BoardModerator from "./components/BoardModerator.component";
import BoardAdmin from "./components/BoardAdmin.component";

import Homepage from './components/Homepage.component';
import ListReservationsComponents from './components/ListReservations.component';
import ListReservationsUserComponents from './components/ListReservationsUser.component';
import CreateReservationsComponents from './components/CreateReservations.component';
import UpdateReservationsComponents from './components/UpdateReservations.component';
import ViewReservationsComponents from './components/ViewReservations.component';
import FooterComponent from './components/Footer.component';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

// state for current user
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

    return ( //Nava bar 
      <Router>
        <div class="container-fullwidth">
        <ul class="navbar navbar-expand navbar-dark bg-dark" id="home-navbar">
          {/*Default  items on bar */}
            <Link to={"/"} class="navbar-symbol">
              LazySlob
            </Link>


            <div class="navbar-nav mr-auto">
              <li class="navbar-text">
                <Link to={"/home"} class="navbar-text">
                  Home
                </Link>
              </li>
        
{/*Moderator items on bar when logged in */}
              {showModeratorBoard && (
                <li class="navbar-text">
                  <Link to={"/mod"} class="navbar-text">
                    Moderator DashBoard
                  </Link>
                </li>
              )}
{/*Admin items on bar when logged in */}
              {showAdminBoard && (
                <li class="navbar-text">
                  <Link to={"/admin"} class="navbar-text">
                    Admin DashBoard
                  </Link>
                </li>
              )} 
{/*Current  items on bar when logged in*/} 
              {showAdminBoard && (
                <li class="navbar-text">
                  <Link to={"/reservations"} class="navbar-text">
                   Reservations List
                  </Link>
                </li>
              )}

{/*Current  items on bar when logged in */}
{currentUser && (
                <li class="navbar-text">
                  <Link to={"/reservations/user"} class="navbar-text">
                   Reservations User List
                  </Link>
                </li>
              )}              

{/*Current  items on bar when logged in */}
              {currentUser && (
                <li class="navbar-text">
                  <Link to={"/user"} class="navbar-text">
                    User
                  </Link>
                </li>
              )}
              
            </div>
{/*Current  user info on bar when logged in */}
            {currentUser ? (
              <div class="navbar-nav ml-auto">
                <li class="navbar-text">
                  <Link to={"/profile"} class="navbar-text">
                    {currentUser.username}
                  </Link>
                </li> 
{/*Log out button on bar when logged in */}
                <li class="navbar-text">  
                  <a href="/login" class="navbar-text" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div class="navbar-nav ml-auto">
                <li class="navbar-text">
                  <Link to={"/login"}class="navbar-text">
                    Login
                  </Link>
                </li>
{/*Sign up on button on bar */}
                <li class="navbar-text">
                  <Link to={"/register"} class="navbar-text">
                    Sign Up
                  </Link>
                </li>
                
              </div>
            )}
      
          </ul>
          <div> {/*Components when get call to switch from URL */}
            <Switch>
              <Route exact path={["/", "/home"]} component={Homepage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path = "/reservations/user" component = {ListReservationsUserComponents}></Route>
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path = "/reservations" component = {ListReservationsComponents}></Route>
              <Route path = "/add-reservation" component = {CreateReservationsComponents}></Route>
              <Route path = "/update-reservation/:id" component = {UpdateReservationsComponents}></Route>
              <Route path = "/view-reservation/:id" component = {ViewReservationsComponents}></Route>
            </Switch>
          </div>
        </div>
        <FooterComponent/> {/*Footer component */}
      </Router>
    );
  }
}

export default App;