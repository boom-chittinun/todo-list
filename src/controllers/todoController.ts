import { Request, Response } from "express";
import {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodoById,
  removeTodo,
} from "../services/todoService";

export const getTodos = (req: Request, res: Response) => {
  const todos = getAllTodos();
  res.json(todos);
};

export const getTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const todo = getTodoById(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo = addTodo(title);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const updatedTodo = updateTodoById(id, title, completed);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const success = removeTodo(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};
