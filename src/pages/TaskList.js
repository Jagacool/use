import React, { useContext, useState, useEffect } from "react";
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

  // Your existing JSX code for displaying tasks and products

  return (
    <>
      <div className="myGrid">
        {/* Your form and tasks display */}
      </div>
    </>
  );
};

export default TaskList;
