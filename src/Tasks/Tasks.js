import React from 'react';
import classes from './Tasks.module.css';

import Task from './Task/Task';

function Tasks(props) {

    const allTasks = [];
    for (let key in props.tasks) {
        allTasks.push({
            id: key,
            data: props.tasks[key]
        });
    }

    return (
        <div className={classes.TasksList}>
            <div className={classes.HeaderRow}>
                <div className={[classes.Serial, classes.Data].join(' ')}>#</div>
                <div className={[classes.Activity, classes.Data].join(' ')}>Activity</div>
                <div className={[classes.Status, classes.Data].join(' ')}>Status</div>
                <div className={[classes.EndsIn, classes.Data].join(' ')}>Ends In</div>
            </div>
            <div className={classes.DataRows}>
                {allTasks.map(task => {
                    return (
                        <div className={classes.DataRow}>
                            <Task key={task.id} id={task.id} data={task.data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tasks;