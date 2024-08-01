import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList(props) {
  const { tasks, setTasks } = props;

  return (
    <div>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default ToDoList;
