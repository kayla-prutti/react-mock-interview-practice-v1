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

  const Card = ({ task: Task }: CardProps) => {
    return (
      <div key={Task.id}>
        <h1>{Task.title}</h1>
        <p>{Task.status}</p>
        <div>
          <button
            disabled={Task.status === STATUS[0]}
            onClick={() => {
              onHandleLeft(Task.id, Task.status);
            }}
          >
            Move left
          </button>
          <button
            disabled={Task.status === STATUS[STATUS.length - 1]}
            onClick={() => {
              onHandleRight(Task.id, Task.status);
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
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <Card task={task} />
          ))}
      </div>
    );
  };

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
