import "./App.css";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";
import { useStore } from "./store";

function App() {
  const { todlists } = useStore();
  console.log("todolist", todlists);
  return (
    <>
      <Todo />
      <Todolist/>
    </>
  );
}

export default App;
