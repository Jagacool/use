import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleTaskDone } =
    useContext(GlobalContext);

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    console.log("desde handleChange", event.target.name, event.target.value);

    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask(task);
  };

  return (
    <>
      <div className="myGrid">
        <div className="flex justify-center itmes-center h-3/4">
          <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
            <h2 className="mb-7 text-3x1">Creating a task</h2>
            <div className="mb-5">
              <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Write a title.."
                value={task.title}
                className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
              />
            </div>
            <div className="mb-5">
              <textarea
                name="description"
                rows="2"
                placeholder="Write a description.."
                onChange={handleChange}
                value={task.description}
                className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
              ></textarea>
            </div>
            <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
              Create Task
            </button>
          </form>
        </div>

        {/*  */}

        <div className="flex justify-center">
          <div className="w-6/12">
            {tasks.map((task) => (
              <div
                className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
                key={task.id}
              >
                <div>
                  <h1>{task.title}</h1>
                  <p>{task.description}</p>
                </div>
                <div>
                  <h6>~ {task.id} ~</h6>
                  <button
                    className="bg-purple-600 hover:bg-purple-500 py-2 px-4 mt-2"
                    onClick={() => toggleTaskDone(task.id)}
                  >
                    {task.done ? "Undone" : "Done"}
                  </button>{" "}
                  &nbsp;
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
