import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import TaskList from "./pages/TaskList";

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
