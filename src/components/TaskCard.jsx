import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { Delete, Edit } from "./Icons";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const TaskCard = ({ task }) => {
  const { deleteTask } = useTask();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-4 rounded-md flex flex-col overflow-auto max-h-[400px] m-4">
      <header className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-1 items-center">
          <button
            onClick={() => deleteTask(task._id)}
            className="text-white px-1 py-1 rounded-md"
          >
            <Delete />
          </button>
          <Link to={`/tasks/${task._id}`}>
            <Edit />
          </Link>
          <button
            onClick={() => deleteTask(task._id)}
            className="text-white px-1 py-1 rounded-md"
          ></button>
        </div>
      </header>
      <p className="text-slate-300 text-lg mb-2 break-words whitespace-normal">
        {task.description}
      </p>
      <p className="text-slate-500 font-light text-sm">
        Reference date: {dayjs(task.date).utc().format()}
      </p>
    </div>
  );
};

export default TaskCard;
