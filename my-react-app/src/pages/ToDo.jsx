import React, { useState } from "react";
import FormControl from "../components/FormControl/FormControl";
import ToDoList from "../components/ToDoList/ToDoList";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(0);

  const handleTaskAddition = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: taskId,
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
      setTaskId(taskId + 1);
    }
  };

  return (
    <div className="mt-16 px-6">
      <div className="container mx-auto flex items-center space-x-4 p-4">
        <FormControl
          type="text"
          placeholder="Add a new task"
          label="Task"
          id="add"
          name="add"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
          onClick={handleTaskAddition}
        >
          +
        </button>
      </div>
      <div className="ml-5 px-6">
        <div className="container mx-auto">
          <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
