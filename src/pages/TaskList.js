import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { CartContext } from "../context/CartContext"; // Import CartContext

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleTaskDone } = useContext(GlobalContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext); // Use cart context

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

  // ... Your existing JSX ...

  return (
    <>
      <div className="myGrid">
        {/* ... Existing Form JSX ... */}

        {/* Display Products */}
        <div className="w-6/12">
          {tasks.map((task) => (
            <div
              className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
              key={task.id}
            >
              {/* ... Existing Task JSX ... */}
            </div>
          ))}
        </div>

        {/* Display Cart Items */}
        <div className="w-6/12">
          <h2>Cart Items</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            >
              <div>
                <h1>{item.title}</h1>
                <p>Price: ${item.price}</p>
              </div>
              <div>
                <button
                  className="bg-red-600 hover:bg-red-500 py-2 px-4 mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
