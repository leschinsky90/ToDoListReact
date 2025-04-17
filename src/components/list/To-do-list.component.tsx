import { IToDoListComponentProps } from "../../types/to-do-list.component.types";
import { ToDoListItemComponent } from "./To-do-list-item.component";
import "./list.css";

export const ToDoListComponent = ({ todos }: IToDoListComponentProps) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <ToDoListItemComponent todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
