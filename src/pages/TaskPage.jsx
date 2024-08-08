import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const { getTasks, tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1 className="p-4">No tasks found</h1>;

  return (
    <div className="grid sd:grid-cols-2  md:grid-cols-3 gap-2 pt-4">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};
export default TaskPage;
