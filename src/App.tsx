import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from "./Components/TaskForm";
import TaskList, { task } from "./Components/TaskList";

export default function App() {
  const defaultValue: task = {
    title: "",
    description: "",
    done: false,
  };

  const [tasksList, handleTaskListChange] = React.useState<task[]>([]);
  const [editedValue, handleChange] = React.useState<task>(defaultValue);

  const createTask = () => {
    handleTaskListChange([editedValue, ...tasksList]);
    handleChange(defaultValue);
  };

  const deleteTask = (index: number) => {
    const taskListClone = [...tasksList];
    taskListClone.splice(index, 1);
    handleTaskListChange(taskListClone);
  };

  const changeTaskStatus = (index: number) => {
    const taskListClone = [...tasksList];
    const finishedTask = {
      ...taskListClone[index],
      done: !taskListClone[index].done,
    };
    taskListClone.splice(index, 1, finishedTask);
    handleTaskListChange(taskListClone);
  };

  return (
    <div className="App">
      <div
        className="my-5 mx-auto"
        style={{ maxWidth: "450px", display: "flex", flexDirection: "column" }}
      >
        <TaskForm
          task={editedValue}
          canCreate={tasksList.length < 10}
          onChange={(task) => handleChange(task)}
          onCreate={createTask}
        />
      </div>

      <div style={{ width: "70%", margin: "auto", marginBottom: "10px" }}>
        <TaskList
          tasks={tasksList}
          onDelete={deleteTask}
          onChangeTaskStatus={changeTaskStatus}
        />
      </div>
    </div>
  );
}
