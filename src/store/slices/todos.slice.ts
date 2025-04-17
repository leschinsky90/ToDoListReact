import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "../../types";

const initialState: ITodo[] = [
  {
    title: "Buy groceries",
    description: "Milk, Bread, Eggs, and Cheese",
    priority: "mediumPriority",
    isCompleted: false,
    id: 1,
  },
  {
    title: "Clean the house",
    description: "Living room, Kitchen, and Bathroom",
    priority: "highPriority",
    isCompleted: false,
    id: 2,
  },
  {
    title: "Finish project report",
    description: "Complete the final report for the project",
    priority: "highPriority",
    isCompleted: true,
    id: 3,
  },
  {
    title: "Read a book",
    description: "Read at least two chapters of '1984' by George Orwell",
    priority: "lowPriority",
    isCompleted: false,
    id: 4,
  },
  {
    title: "Exercise",
    description: "Go for a run or do a home workout",
    priority: "mediumPriority",
    isCompleted: false,
    id: 5,
  },
  {
    title: "Call Mom",
    description: "Check in and see how she's doing",
    priority: "lowPriority",
    isCompleted: true,
    id: 6,
  },
  {
    title: "Plan weekend trip",
    description: "Research destinations and create an itinerary",
    priority: "mediumPriority",
    isCompleted: false,
    id: 7,
  },
  {
    title: "Update resume",
    description: "Add recent work experience and skills",
    priority: "highPriority",
    isCompleted: false,
    id: 8,
  },
  {
    title: "Learn TypeScript",
    description: "Complete online course on TypeScript basics",
    priority: "mediumPriority",
    isCompleted: false,
    id: 9,
  },
  {
    title: "Grocery shopping for next week",
    description: "Plan meals and buy ingredients for the week ahead",
    priority: "lowPriority",
    isCompleted: false,
    id: 10,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      return (state = [...state, { ...action.payload, isCompleted: false }]);
    },
    removeTodo(state, action: PayloadAction<number>) {
      state = state.filter((item) => item.id !== action.payload);
    },
    cleanTodoList(state) {
      state.slice(0, state.length);
    },
  },
});

export const { addTodo, removeTodo, cleanTodoList } = todoSlice.actions;
export default todoSlice.reducer;
