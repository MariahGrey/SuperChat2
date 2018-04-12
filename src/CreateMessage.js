import React, { Component } from "react";
import uuid from "uuid";
import firebase from "./firebase";
import { Button, Input } from "semantic-ui-react";

class CreateMessage extends Component {
  constructor() {
    super();

    this.state = {
      message: {
        body: "",
        avatar: "",
        username: ""
      }
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        message: {
          ...state.message,
          [changeEvent.target.name]: changeEvent.target.value
        }
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    let id = uuid.v4();

    firebase.ref(`/${this.props.channel}/${id}`).set({
      ...this.state.message,
      ts: new Date().getTime(),
      id: id,
      username: localStorage.getItem("username"),
      avatar: localStorage.getItem("avatar")
    });

    this.setState(state => {
      return {
        message: {
          ...state.message,
          body: ""
        }
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Input
            type="text"
            name={"body"}
            value={this.state.message.body}
            placeholder={"New Message"}
            onChange={this.onInputChange}
          />{" "}
          <Button color={"black"} type="submit">
            Send Message
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateMessage;
