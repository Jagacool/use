import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {useNavigate, useParams} from 'react-router-dom';

const TaskForm = () => {
  const { addTask } = useContext(GlobalContext);
  const  navigate = useNavigate();
  //
  const [task, setTask] = useState({
    id: '',
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

    
    navigate('/');
  };



  return (
    <>
      <div className="flex justify-center itmes-center h-3/4">
        <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
          <h2 className="mb-7 text-3x1">
          Creating a task
          </h2>
          <div className="mb-5">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Write a title.."
              value={task.title}
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
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
    </>
  );
}

export default TaskForm