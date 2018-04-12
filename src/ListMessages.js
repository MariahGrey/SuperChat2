import React, { Component } from "react";
import firebase from "./firebase";

class ListMessages extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.initFirebaseListener(this.props.channel);
  }

  componentWillReceiveProps(nextProps) {
    this.initFirebaseListener(nextProps.channel);
  }

  initFirebaseListener = channel => {
    let messages = firebase.ref(`/${channel}`);

    messages.on("value", snapshot => {
      let data = snapshot.val();
      let messages = [];

      for (let key in data) {
        messages.push({
          key: key,
          ...data[key]
        });
      }

      messages = messages.sort((a, b) => b.ts - a.ts);

      this.setState(state => {
        return {
          messages: messages
        };
      });
    });
  };

  render() {
    let messages = this.state.messages;

    return (
      <div>
        <h1>Messages ({messages.length})</h1>
        <hr />
        {messages.map(msg => (
          <div key={msg.key} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={msg.avatar}
              style={{
                height: 75,
                width: 75,
                borderRadius: "50%",
                padding: 5
              }}
            />
            <b>{msg.username}</b>:{msg.body}
          </div>
        ))}
      </div>
    );
  }
}

export default ListMessages;
