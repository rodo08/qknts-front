import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks.length) {
    return <h1>No tasks</h1>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};
export default TaskPage;
