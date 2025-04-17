import { addTodo } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "../../App.css";
import { useState } from "react";
export const AddTodoComponent = () => {
  const [inputValue, setInputValue] = useState<string>("New Todo");

  const dispatch = useAppDispatch();
  const todosData = useAppSelector((state) => state);
  console.log(todosData);

  const handleOnAddTodoButtonClick = () => {
    dispatch(
      addTodo({
        title: inputValue,
        id: todosData.todoReducer.length + 1,
        description: "",
        priority: "lowPriority",
        isCompleted: false,
      })
    );
  };
  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="addTodoContainer">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => handleOnInputChange(event)}
      />
      <button className="addTodoButton" onClick={handleOnAddTodoButtonClick}>
        Add Todo
      </button>
    </div>
  );
};
