import React, { Component } from "react";

import UserService from "../services/user.service";
// Admin dashboard page
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h2 class="yeseva-one-font" style={{fontSize: "76px"}}>{this.state.content}</h2>
        </header>
      </div>
    );
  }
}