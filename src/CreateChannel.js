import React, { Component } from "react";
import firebase from "./firebase";
import uuid from "uuid";
import { Button, Input } from "semantic-ui-react";

class CreateChannel extends Component {
  constructor() {
    super();

    this.state = {
      channel: ""
    };
  }

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    let { channel } = this.state;
    let id = uuid.v4();

    firebase.ref(`/${channel}/${id}`).set({
      username: "CandyBot",
      body: "Sweet! We created a channel!",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiiF-ulESaJ2FNSaIJapgE8H5h-59TAQFDeeVx3ARW3nJvTk",
      ts: new Date().getTime()
    });
    this.setState(state => {
      return {
        channel: ""
      };
    });
  };

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        [changeEvent.target.name]: changeEvent.target.value
      };
    });
  };

  render() {
    let { channel } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <Input
            type="text"
            name={"channel"}
            value={channel}
            placeholder={"New Channel"}
            onChange={this.onInputChange}
          />{" "}
          <Button color={"black"} type="submit">
            Add Channel
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateChannel;
