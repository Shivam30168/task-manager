import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage tasks={tasks} setTasks={setTasks} />}
      />
      <Route
        path="/task/:id"
        element={<TaskDetailPage tasks={tasks} updateTask={updateTask} />}
      />
    </Routes>
  );
};

export default App;
