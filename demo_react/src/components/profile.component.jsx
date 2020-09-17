import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/Auth.service";
//Profile of Current User from database
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
        <h3 className = "yeseva-one-font-info" style={{fontSize: "50px"}}> 
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <div className = "card-body">
        <div className = "card-title">
        <label class="profile">ID user:</label>{" "}
        <div class="profile-info">  {currentUser.id}</div>
          </div>
        <div className = "card-title">
        <label class="profile">Email:</label>{" "}
        <div class="profile-info"> {currentUser.email}</div>
          </div>
          <label class="profile">Authorities:</label>
        <ul class="profile-info" style={{fontSize: "large"}}>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        </div>
      </div>: null}
      </div>
    );
  }
}