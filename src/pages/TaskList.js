import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useCartContext } from "../context/CartContext";

const TaskList = () => {
  const { tasks, addTask, deleteTask, toggleTaskDone } = useContext(GlobalContext);
  const { cartItems, addToCart, removeFromCart } = useCartContext();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) {
          setProducts(data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      {/* Your existing JSX for task creation */}
      
      {/* Display Product List */}
      <div className="w-6/12">
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id} className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4">
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
            <div>
              <button
                className="bg-green-600 hover:bg-green-500 py-2 px-4 mt-2"
                onClick={() => addToCart(product)}
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
      
      {/* Display Task List */}
      <div className="w-6/12">
        <h2>Task List</h2>
        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4">
            {/* Your existing task rendering code */}
          </div>
        ))}
      </div>
      
      {/* Display Cart Items */}
      <div className="w-6/12">
        <h2>Cart Items</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4">
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
    </>
  );
};

export default TaskList;
