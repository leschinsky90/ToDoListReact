import { IToDoListItemComponentProps } from "../../types/to-do-list-item.component.types";
import "./list.css";
import TextField from "@mui/material/TextField";
import { removeTodo } from "../../store/slices/todos.slice";
import { useAppDispatch } from "../../store/hooks";

export const ToDoListItemComponent = ({
  todo,
}: IToDoListItemComponentProps) => {
  const dispatch = useAppDispatch();

  const headerClassName: string = "header " + todo.priority;

  const handleOnDeleteButtonClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="todoCard">
      <div className="container1">
        <div className={headerClassName}>
          <TextField
            className="title"
            id="outlined-read-only-input"
            defaultValue={todo.title}
            variant="filled"
          />
        </div>

        <TextField
          className="description"
          id="outlined-read-only-input"
          defaultValue={todo.description}
          variant="filled"
        />
      </div>
      <div className="container2">
        {todo.isCompleted ? (
          <div className="isCompleted"></div>
        ) : (
          <div className="isNotCompleted"></div>
        )}
        <div className="controlButtons">
          <button className="deleteTodo" onClick={handleOnDeleteButtonClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
