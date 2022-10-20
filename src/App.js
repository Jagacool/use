import './App.css';
import { ContextProvider } from './context/ContextProvider';
import TaskList from "./pages/TaskList";

 


function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <TaskList />
          </ContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
