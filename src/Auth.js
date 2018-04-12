import React, { Component } from "react";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: "",
        avatar: ""
      }
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        ...state,
        [changeEvent.target.name]: changeEvent.target.value
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    let { username, avatar } = this.state;

    localStorage.setItem("avatar", avatar);
    localStorage.setItem("username", username);

    this.props.history.push("/general");
  };

  render() {
    return (
      <div>
        <h1>Login, Please.</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name={"username"}
            placeholder={"Username"}
            value={this.state.username}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name={"avatar"}
            placeholder={"Avatar URL"}
            value={this.state.avatar}
            onChange={this.onInputChange}
          />
          <input type="submit" value={"Login"} />
        </form>
      </div>
    );
  }
}

export default Auth;
