import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetailPage = ({ tasks, updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks?.find((task) => task.id === id);

  if (!task) {
    return <p>Task not found</p>;
  }

  const handleStatusChange = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={handleStatusChange}>
        {task.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default TaskDetailPage;
