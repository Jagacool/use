import './App.css';
import { Routes, Route } from 'react-router-dom';
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ContextProvider } from "./context/GlobalContext";
 


function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
