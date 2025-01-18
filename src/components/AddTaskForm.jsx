import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
