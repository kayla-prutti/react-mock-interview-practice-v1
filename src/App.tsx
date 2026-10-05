import { useState } from "react";
import { initialTasks, type Task } from "./data";
import "./index.css";

const STATUS = ["todo", "in progress", "done"];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const onHandleRight = (id: string, currentStatus: string) => {
    const currentStatusIndex = STATUS.indexOf(currentStatus);
    if (currentStatusIndex < STATUS.length - 1) {
      const nextStatus = STATUS[currentStatusIndex + 1];
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, status: nextStatus } : task
        )
      );
    }
  };

  const onHandleLeft = (id: string, currentStatus: string) => {
    const currentStatusIndex = STATUS.indexOf(currentStatus);
    if (currentStatusIndex > 0) {
      const nextStatus = STATUS[currentStatusIndex - 1];
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, status: nextStatus } : task
        )
      );
    }
  };

  const card = (task: Task) => {
    return (
      <div key={task.id}>
        <h1>{task.title}</h1>
        <p>{task.status}</p>
        <div>
          <button
            disabled={task.status === "todo"}
            onClick={() => {
              onHandleLeft(task.id, task.status);
            }}
          >
            Move left
          </button>
          <button
            disabled={task.status === "done"}
            onClick={() => {
              onHandleRight(task.id, task.status);
            }}
          >
            Move right
          </button>
        </div>
      </div>
    );
  };

  const kanbanContainer = (status: string, className: string) => {
    return (
      <div className={className}>
        <h1>{status}</h1>
        {tasks.map((task) => (task.status === status ? card(task) : ""))}
      </div>
    );
  };

  console.log("tasks", tasks);
  return (
    <main>
      <h1>React Mock Interview Practice</h1>
      <div className="kanbanContainer">
        {kanbanContainer("todo", "todoContainer")}
        {kanbanContainer("in progress", "inProgressContainer")}
        {kanbanContainer("done", "doneContainer")}
      </div>
    </main>
  );
}

export default App;
