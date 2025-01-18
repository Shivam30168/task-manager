import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";

const HomePage = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="homepage">
      <h1>Task Management</h1>
      <AddTaskForm addTask={addTask} />
      <div className="filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={filter === "incomplete" ? "active" : ""}
        >
          Incomplete
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default HomePage;
