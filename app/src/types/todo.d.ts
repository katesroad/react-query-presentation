import { IUser } from "./users";

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  user: IUser;
}

export interface ICreateTodo extends Omit<ITodo, "_id"> {
  user: string;
}

export interface ITodoData extends Omit<ITodo, "_id" | "user"> {}

export interface TodoQuery {
  user?: string;
  completed?: boolean;
}
