import { Todo } from "../models/todo";

let todos: Todo[] = [];
let nextId = 1;

export const getAllTodos = (): Todo[] => {
  return todos;
};

export const getTodoById = (id: number): Todo | undefined => {
  return todos.find((todo) => todo.id === id);
};

export const addTodo = (title: string): Todo => {
  const newTodo: Todo = {
    id: nextId++,
    title,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodoById = (
  id: number,
  title: string,
  completed: boolean
): Todo | undefined => {
  const todo = getTodoById(id);
  if (todo) {
    todo.title = title;
    todo.completed = completed;
    return todo;
  }
  return undefined;
};

export const removeTodo = (id: number): boolean => {
  const initialLength = todos.length;
  todos = todos.filter((todo) => todo.id !== id);
  return todos.length !== initialLength;
};
