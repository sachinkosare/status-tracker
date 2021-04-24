import React from "react";
import classes from "./Task.module.css";

import Timer from "react-compound-timer";
//import

function Task(props) {
  const statusDesc = {
    1: "Not Started",
    2: "In Progress",
    3: "Completed"
  };

  let statusClass = classes.Default;
  if (props.data.status === 2) {
    statusClass = classes.InProgress;
  }
  if (props.data.status === 3) {
    statusClass = classes.Completed;
  }

  const taskStatus = statusDesc[props.data.status];
  const initialTime = 1000 * 60 * props.data.duration;
  let duration = null;
  
  if (props.data.status === 2) {
    duration = (
      <Timer initialTime={initialTime} lastUnit="m" direction="backward">
        {() => (
          <React.Fragment>
            <Timer.Minutes />:<Timer.Seconds />
          </React.Fragment>
        )}
      </Timer>
    );
  }
  //const timer =

  return (
    <div className={[classes.DataRow, statusClass].join(' ')}>
      <div className={[classes.Serial, classes.Data].join(" ")}>{props.id}</div>
      <div className={[classes.Activity, classes.Data].join(" ")}>
        {props.data.name}
      </div>
      <div className={[classes.Status, classes.Data].join(" ")}>
        {taskStatus}
      </div>
      <div className={[classes.EndsIn, classes.Data].join(" ")}>
        {duration ? duration : ""}
      </div>
    </div>
  );
}

export default Task;
