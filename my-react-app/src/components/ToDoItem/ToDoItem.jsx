import React from 'react';

function ToDoItem(props) {
  const { task, setTasks } = props;

  const handleCompletedToggle = () => {
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDeleteTask = () => {
    setTasks(prevTasks =>
      prevTasks.filter(t => t.id !== task.id)
    );
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <span
        className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
      >
        {task.text}
      </span>
      <div className="ml-4">
        <button
          onClick={handleCompletedToggle}
          className={`px-4 py-2 text-white font-bold rounded ${task.completed ? 'bg-green-500 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-700'}`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="ml-2 px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
