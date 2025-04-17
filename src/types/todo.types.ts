export interface ITodo {
  id: number;
  title: string;
  description: string;
  priority: "lowPriority" | "mediumPriority" | "highPriority";
  isCompleted: boolean;
}
