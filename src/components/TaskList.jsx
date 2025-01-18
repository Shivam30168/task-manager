import React from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ tasks, setTasks, deleteTask }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);
    setTasks(reorderedTasks);
    localStorage.setItem("tasks", JSON.stringify(reorderedTasks));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            className="task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    className="task-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className="task-item-content">
                      <Link to={`/task/${task.id}`} className="title-task">
                        <h5>Title:</h5> {task.title}
                      </Link>
                      <button onClick={() => deleteTask(task.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
