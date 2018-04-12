import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class ListChannel extends Component {
  constructor() {
    super();

    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    let channels = firebase.ref(`/`);

    channels.on("value", snapshot => {
      let data = snapshot.val();

      if (data === null) return;

      let channels = Object.keys(data);

      this.setState(state => {
        return {
          channels: channels
        };
      });
    });
  }

  render() {
    let channels = this.state.channels;
    return (
      <div>
        <hr />
        {channels.map(c => (
          <div>
            <Link to={`/${c}`}>{c}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ListChannel;
