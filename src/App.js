import React, { Component, Fragment } from "react";
import classes from "./App.module.css";
import Header from './Header/Header';
import Tasks from './Tasks/Tasks';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName : "test project",
      tasks : {
        1: {
          name: "Create Build Package",
          duration: 10,
          status: 3
        },
        2: {
          name: "Localization Changes",
          duration: 20,
          status: 2
        },
        3: {
          name: "Disable Existing Build",
          duration: 5,
          status: 1
        },
        4: {
          name: "Restart Servers",
          duration: 10,
          status: 1
        },
        5: {
          name: "Deploy & Enable New Build",
          duration: 20,
          status: 1
        },
        7: {
          name: "Post Deployment Testing",
          duration: 150,
          status: 1
        },
        8: {
          name: "Business Testing",
          duration: 120,
          status: 1
        },
        10: {
          name: "Smoke Test",
          duration: 25,
          status: 1
        }
      }
    };
  }

  render() {
    return (
      <div className={classes.App}>
        <Header title={this.state.projectName} />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
