import React from "react";
import { ContextProvider } from "./context/ContextProvider";
import TaskList from "./pages/TaskList";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <TaskList />
          </ContextProvider>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
