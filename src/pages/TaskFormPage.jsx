import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadtask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    };
    loadtask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, { ...data, date: dayjs.utc(data.date).format() });
    } else {
      createTask({ ...data, date: dayjs.utc(data.date).format() });
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md md my-2"
            type="text "
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md md my-2"
            rows="3"
            placeholder="Description"
            {...register("description")}
          ></textarea>
          <label htmlFor="date">Reference date</label>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
            type="date"
            {...register("date")}
          />
          <button className="bg-logo-pink-dark px-3 py-2 rounded-md text-white mt-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
export default TaskFormPage;
