import "./App.css";
import { ToDoListComponent } from "./components/list/To-do-list.component";
import { useAppSelector } from "./store/hooks";
import { AddTodoComponent } from "./components/add-todo/Add-todo.component";

function App() {
  const todosData = useAppSelector((state) => state.todoReducer);
  console.log(todosData);

  return (
    <>
      <AddTodoComponent />
      <ToDoListComponent todos={todosData} />
    </>
  );
}

export default App;
