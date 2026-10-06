export type Task = {
  id: string;
  title: string;
  status: string;
};

export type Status = "todo" | "in progress" | "done";

export const initialTasks: Task[] = [
  { id: "t1", title: "Set up project scaffold", status: "todo" },
  { id: "t2", title: "Design the board layout", status: "todo" },
  { id: "t3", title: "Write the README", status: "todo" },
];
