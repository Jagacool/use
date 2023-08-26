import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTaskDone,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div className="myGrid">
      <div className="flex justify-center items-center h-3/4">
        {/* Task form */}
        <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
          {/* Your form fields here */}
        </form>
      </div>

      {/* Product list */}
      <div className="flex justify-center">
        <div className="w-6/12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4"
            >
              <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="py-2 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-1/4 mr-2"
                />
                <button
                  className="bg-green-600 hover:bg-green-500 py-2 px-4 mt-2"
                  onClick={() => addToCart(product, quantity)}
                >
                  Add to Cart
                </button>{" "}
                <button
                  className="bg-red-600 hover:bg-red-500 py-2 px-4 mt-2"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
