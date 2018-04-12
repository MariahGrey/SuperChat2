import React, { Component } from "react";
import CreateMessage from "./CreateMessage";
import ListMessages from "./ListMessages";
import CreateChannel from "./CreateChannel";
import ListChannel from "./ListChannel";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: false,
      channels: []
    };
  }

  render() {
    let { user, channels } = this.state;
    let channel = this.props.match.params.channel || "general";

    console.log(this.props);
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1>SuperChat 2</h1>
          <CreateMessage channel={channel} />
          <ListMessages channel={channel} />
        </div>

        <div style={styles.channels}>
          <h1>Channels</h1>
          <CreateChannel />
          <ListChannel />
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    display: "flex"
  },
  content: {
    flex: 1,
    padding: 10,
    minHeight: "100vh"
  },
  channels: {
    minWidth: 200,
    padding: 30,
    borderLeft: "1px solid black"
  }
};
export default App;
